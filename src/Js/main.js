document.addEventListener("DOMContentLoaded", function () {
    class Exame {
        constructor(nome, descricao) {
            this.nome = nome;
            this.descricao = descricao;
        }
    }

    // Lista para armazenar os exames
    let listaExames = [];

    // Função para adicionar exames à lista e criar elementos HTML
    function adicionarExame(nome, descricao) {
        let novoExame = new Exame(nome, descricao);
        listaExames.push(novoExame);
    }

    // Exemplos de instanciamento de exames
    adicionarExame("Exame de Sangue", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    adicionarExame("Raio-X", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    adicionarExame("Ultrassonografia", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");


    const container = document.getElementById("accordion-container");
    listaExames.forEach((exame, index) => {
        let divExame = document.createElement("div")
        divExame.classList.add("border-2", "border-gray-200", "p-5", "bg-gray-50", "rounded-lg");

        // Criar elemento h3 para o nome do exame
        let nomeExame = document.createElement("h3");
        nomeExame.textContent = exame.nome;
        nomeExame.classList.add("text-lg", "font-bold", "mb-2", "text-blue-600");

        // Criar elemento p para a descrição do exame
        let descricaoExame = document.createElement("p");
        descricaoExame.textContent = exame.descricao;
        descricaoExame.classList.add("text-sm", "text-gray-700");

        // Adicionar elementos à div existente
        divExame.appendChild(nomeExame);
        divExame.appendChild(descricaoExame);
        container.appendChild(divExame);

        // Criar botão para expandir/colapsar o acordeão
        let botaoExame = document.createElement("button");
        botaoExame.textContent = "Expandir";
        botaoExame.classList.add("text-sm", "text-gray-700", "underline", "focus:outline-none", "mt-2");

        // Adicionar evento de clique para expandir/colapsar o acordeão
        botaoExame.addEventListener("click", () => {
            descricaoExame.classList.toggle("hidden");
        });

        divExame.appendChild(botaoExame);
    });

});