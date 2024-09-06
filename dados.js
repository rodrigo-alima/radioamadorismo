let dados = [
    {
        titulo: "Radioamadorismo: Uma Comunidade Global Conectada pelas Ondas",
        frase: "Junte-se à rede mundial de entusiastas e explore as infinitas possibilidades de conexão e amizade através do radioamadorismo.",
        imagem: "img/radioamadorismo-capa.jpeg",
        link: "#"
    },
    {
        titulo: "Ondas Curtas: Sua Porta de Entrada para o Mundo",
        frase: "Explore o planeta sem sair de casa! Conecte-se com pessoas ao redor do globo através da magia das ondas curtas.",
        imagem: "img/ondas-curtas-capa.jpeg",
        link: "./detalhe.html?id=1"

    },
    {
        titulo: "Modos Digitais: A Evolução da Comunicação no Radioamadorismo",
        frase: "Experimente novas formas de se conectar com o mundo! Descubra a eficiência e os recursos dos modos digitais no radioamadorismo.",
        imagem: "img/modos-digitais-capa.jpeg",
        link: "./detalhe.html?id=2"
    },
    {
        titulo: "Código Morse: Uma Tradição Atemporal no Radioamadorismo",
        frase: "Desvende a linguagem dos pontos e traços! Aprenda o código Morse e descubra uma forma única e gratificante de comunicação.",
        imagem: "img/codigo-morse-capa.jpeg",
        link: "./detalhe.html?id=3"
    }, 
    {
        titulo: "Alcance as Estrelas: Comunicação via Satélite no Radioamadorismo",
        frase: "Expanda seus horizontes! Explore a emoção da comunicação via satélite e conecte-se com o mundo de uma forma inovadora.",
        imagem: "img/comunicacao-via-satelite-capa.jpeg",
        link: "./detalhe.html?id=4"
    },
    {
        titulo: "Construa seu Caminho para as Ondas: A Arte da Autoconstrução no Radioamadorismo",
        frase: "Descubra a satisfação de criar seus próprios equipamentos de rádio e explore o mundo das comunicações com a magia da autoconstrução.",
        imagem: "img/construcao-capa.jpeg",
        link: "./detalhe.html?id=5"
    },
    {
        titulo: "Servindo a Comunidade Através das Ondas do Rádio",
        frase: "Faça a diferença! Junte-se aos radioamadores que fornecem comunicação essencial em situações de emergência e contribuem para o bem-estar da sociedade.",
        imagem: "img/resgate.jpeg",
        link: "./detalhe.html?id=6"
    },
    {
        titulo: "APRS: A ferramenta essencial para o radioamador moderno.",
        frase: "Compartilhe sua posição, mensagens e muito mais, tudo em tempo real.",
        imagem: "img/aprs-capa.jpeg",
        link: "./detalhe.html?id=7"
    },
    {
        titulo: "Torne-se um Radioamador",
        frase: "Entre para o fascinante mundo do radioamadorismo. É fácil e gratificante.",
        imagem: "img/torne-se-radioamador-capa.jpeg",
        link: "./detalhe.html?id=8"
    }
]

document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('section');

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
});