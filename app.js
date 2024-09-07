
function iniciar() {
    const section = document.getElementById('dados');

    dados.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');

        div.innerHTML = `
            <div class="card">
                <div class="div1">
                    <p>${item.titulo}</p>
                    <p>"${item.frase}"</p>
                </div>
                <div class="div2">
                    <a href="${item.link}">
                        <img src="${item.imagem}" alt="${item.titulo}">
                    </a>
                </div>
            </div>
        `;

        section.appendChild(div);
    });
};

document.addEventListener('DOMContentLoaded', iniciar);

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("dados");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = `
            <div class="card">
                <div class="div1">
                    <p>Você precisa digitar algo</p>
                    <p>"Exemplo: FT8 ou HF"</p>
                </div>
                <div class="div2">
                   <a href="#">
                    <img src="img/pesquisar.jpeg" alt="Foto de homem procurando algo com uma lupa dentro de uma caixa">
                </div>
            </div>
        `;
        window.scrollTo(0, 0);
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let frase = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        frase = dado.frase.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || frase.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="card">
                <div class="div1">
                    <p>${dado.titulo}</p>
                    <p>"${dado.frase}"</p>
                </div>
                <div class="div2">
                    <a href="${dado.link}">
                        <img src="${dado.imagem}" alt="${dado.titulo}">
                    </a>
                </div>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = `
            <div class="card">
                <div class="div1">
                    <p>Tópico não encontrado</p>
                    <p>"Tente novamente com outra palavra chave"</p>
                </div>
                <div class="div2">
                   <a href="#">
                    <img src="img/pesquisar.jpeg" alt="Foto de homem procurando algo com uma lupa dentro de uma caixa">
                </div>
            </div>
        `;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
    window.scrollTo(0, 0);
}