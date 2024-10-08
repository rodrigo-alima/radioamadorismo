const menuItems = [
    { texto: "Home", link: "index.html" },
    { texto: "Ondas Curtas", link: "./detalhe.html?id=1" },
    { texto: "Modos Digitais", link: "./detalhe.html?id=2" },
    { texto: "Código Morse", link: "./detalhe.html?id=3" },
    { texto: "Comunicação Via Satélite", link: "./detalhe.html?id=4" },
    { texto: "Construção", link: "./detalhe.html?id=5" },
    { texto: "Resgate", link: "./detalhe.html?id=6" },
    { texto: "APRS", link: "./detalhe.html?id=7"},
    { texto: "Torne-se Radioamador", link: "./detalhe.html?id=8"},
    { texto: "Links", link: "links.html" }
];

// Função para criar e adicionar itens ao menu
function criarMenu() {
    const ul = document.getElementById('menu');

    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = item.texto;
        li.appendChild(a);
        ul.appendChild(li);
    });
}

// Função para alternar o menu em dispositivos móveis
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show'); // Adiciona ou remove a classe 'show' para exibir/ocultar o menu
}

function fecharMenuAoClicarFora(event) {
    const menu = document.getElementById('menu');
    const toggleButton = document.getElementById('menu-toggle');
    
    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.classList.remove('show'); // Fecha o menu se clicar fora dele
    }
}

function fecharMenu() {
    const menu = document.getElementById('menu');
    menu.classList.remove('show');
}

// Chame a função para criar o menu quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    criarMenu();
    
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenuButton = document.getElementById('close-menu');
    
    // Adiciona o evento de clique para alternar o menu (abrir/fechar)
    menuToggle.addEventListener('click', toggleMenu);

    // Adiciona o evento de clique para fechar o menu com o botão "X"
    closeMenuButton.addEventListener('click', fecharMenu);

    // Adiciona o evento para fechar o menu ao clicar fora dele
    document.addEventListener('click', fecharMenuAoClicarFora);
});