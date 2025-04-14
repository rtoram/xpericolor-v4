function prepareImageAndPalette(image, palette) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Configuração do tamanho
    canvas.width = image.width;
    canvas.height = image.height + 100; // Espaço para a paleta abaixo

    // Desenhar a imagem
    ctx.drawImage(image, 0, 0);

    // Desenhar a paleta
    palette.forEach((color, index) => {
        ctx.fillStyle = color;
        ctx.fillRect(index * 50, image.height, 50, 50);
    });

    return canvas;
}

document.getElementById('download').addEventListener('click', () => {
    const image = document.querySelector('#image-preview img');
    const palette = history[currentTab][history[currentTab].length - 1].map(rgb => rgbToHex(rgb[0], rgb[1], rgb[2]));

    if (!image || !palette) {
        alert('Nenhuma imagem ou paleta disponível!');
        return;
    }

    const canvas = prepareImageAndPalette(image, palette);
    const link = document.createElement('a');
    link.download = 'xpericolor_palette.jpg';
    link.href = canvas.toDataURL('image/jpeg');
    link.click();
});
