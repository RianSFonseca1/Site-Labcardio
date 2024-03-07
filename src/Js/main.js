
document.addEventListener("DOMContentLoaded", function () {
    window.visualViewport.addEventListener('resize', () => {
        // Obter a escala atual da página
        const zoomLevel = window.visualViewport.scale;

        // Exibir um popup indicando que a função foi ativada e passar o zoomLevel como argumento
        mostrarPopup(zoomLevel);
    });

    // Função para exibir o popup e receber o zoomLevel como parâmetro
    function mostrarPopup(zoomLevel) {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.textContent = `Função de zoom ativada! Zoom Level: ${zoomLevel}`;
        document.body.appendChild(popup);

        // Remover o popup após alguns segundos
        setTimeout(() => {
            popup.remove();
        }, 3000); // 3000 milissegundos = 3 segundos
    }

});

