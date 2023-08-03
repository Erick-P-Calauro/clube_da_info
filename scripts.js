function createCard(textoP, textoH3, imagem) {
    // Criando elemento de texto do card
    var p = document.createElement("p");
    p.textContent= textoP;
   
    // Criando elemento de título do card
    var h3 = document.createElement("h3");
    h3.textContent = textoH3
    
    // Criando a imagem de ícone do card
    var img = document.createElement("img");
    img.setAttribute("src", imagem)

    // Adicionando Imagem e Título em uma div para formatação
    var div = document.createElement("div");
    div.appendChild(img);
    div.appendChild(h3);

    // Adicionando a Div e o texto no card
    // Adicionando classe ".card" para formatação
    var card = document.createElement("div");
    card.classList = "card";
    card.appendChild(div);
    card.appendChild(p);

    return document.getElementById('cards').appendChild(card);
}

function loadCard() {
    // HTML Card
    createCard("Nam euismod tellus orci, a mattis elit semper et. Donec imperdiet, magna id commodo sagittis, ipsum metus interdum augue, ut aliquam ligula massa ac augue. Pellentesque in tortor eu leo tincidunt pulvinar.",
    "HTML5", "./assets/html.png");

    // CSS Card
    createCard("Nam euismod tellus orci, a mattis elit semper et. Donec imperdiet, magna id commodo sagittis, ipsum metus interdum augue, ut aliquam ligula massa ac augue. Pellentesque in tortor eu leo tincidunt pulvinar.",
    "CSS3", "./assets/css-3.png");

    // JS Card
    createCard("Nam euismod tellus orci, a mattis elit semper et. Donec imperdiet, magna id commodo sagittis, ipsum metus interdum augue, ut aliquam ligula massa ac augue. Pellentesque in tortor eu leo tincidunt pulvinar.",
    "Javascript", "./assets/js.png");

    // PHP Card
    createCard("Nam euismod tellus orci, a mattis elit semper et. Donec imperdiet, magna id commodo sagittis, ipsum metus interdum augue, ut aliquam ligula massa ac augue. Pellentesque in tortor eu leo tincidunt pulvinar.",
    "PHP", "./assets/php.png");

    // React Card
    createCard("Nam euismod tellus orci, a mattis elit semper et. Donec imperdiet, magna id commodo sagittis, ipsum metus interdum augue, ut aliquam ligula massa ac augue. Pellentesque in tortor eu leo tincidunt pulvinar.",
    "ReactJS", "./assets/react.png");

    // Node Card
    createCard("Nam euismod tellus orci, a mattis elit semper et. Donec imperdiet, magna id commodo sagittis, ipsum metus interdum augue, ut aliquam ligula massa ac augue. Pellentesque in tortor eu leo tincidunt pulvinar.",
    "NodeJS", "./assets/node-js.png");
}

function addCards() {
    var card = document.getElementById('cards');
    card.innerText = "";

    loadCard();

    createCard("Nam euismod tellus orci, a mattis elit semper et. Donec imperdiet, magna id commodo sagittis, ipsum metus interdum augue, ut aliquam ligula massa ac augue. Pellentesque in tortor eu leo tincidunt pulvinar.",
    "Python", "./assets/python.png");
    createCard("Nam euismod tellus orci, a mattis elit semper et. Donec imperdiet, magna id commodo sagittis, ipsum metus interdum augue, ut aliquam ligula massa ac augue. Pellentesque in tortor eu leo tincidunt pulvinar.",
    "Ruby", "./assets/ruby.png");
    createCard("Nam euismod tellus orci, a mattis elit semper et. Donec imperdiet, magna id commodo sagittis, ipsum metus interdum augue, ut aliquam ligula massa ac augue. Pellentesque in tortor eu leo tincidunt pulvinar.",
    "PostgreSQL", "./assets/postgre.png");
    createCard("Nam euismod tellus orci, a mattis elit semper et. Donec imperdiet, magna id commodo sagittis, ipsum metus interdum augue, ut aliquam ligula massa ac augue. Pellentesque in tortor eu leo tincidunt pulvinar.",
    "Photoshop", "./assets/photoshop.png");
    createCard("Nam euismod tellus orci, a mattis elit semper et. Donec imperdiet, magna id commodo sagittis, ipsum metus interdum augue, ut aliquam ligula massa ac augue. Pellentesque in tortor eu leo tincidunt pulvinar.",
    "Git", "./assets/git.png");
    createCard("Nam euismod tellus orci, a mattis elit semper et. Donec imperdiet, magna id commodo sagittis, ipsum metus interdum augue, ut aliquam ligula massa ac augue. Pellentesque in tortor eu leo tincidunt pulvinar.",
    "GitHub", "./assets/github.png");

    document.getElementById('button_cursos').innerText = "Ver menos";
    document.getElementById('button_cursos').setAttribute("onClick", "removeCards()");
}

function removeCards() {
    var card = document.getElementById('cards');
    card.innerText = ""
    
    loadCard();
    
    document.getElementById('button_cursos').innerText = "Ver mais";
    document.getElementById('button_cursos').setAttribute("onClick", "addCards()");
}

window.addEventListener("load", loadCard);