function renderPalette(colors, container, variationsContainer, tab, extraCallback) {
    container.innerHTML = '';
    colors.forEach(rgb => {
        const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
        const block = document.createElement('div');
        block.className = 'color-block';
        block.style.backgroundColor = hex;

        const colorWrapper = document.createElement('div');
        colorWrapper.style.textAlign = 'center';

        // Código da cor abaixo do box
        const colorText = document.createElement('span');
        colorText.textContent = `${hex}`;
        colorWrapper.appendChild(colorText);

        // Botão de cópia
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copiar';
        copyButton.style.marginLeft = '10px';
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(hex).then(() => {
                alert('Código copiado: ' + hex);
            });
        });
        colorWrapper.appendChild(copyButton);

        block.appendChild(colorWrapper);
        container.appendChild(block);
    });
}
