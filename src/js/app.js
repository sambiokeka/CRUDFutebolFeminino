const jogadorasIniciais = [
    {
        "nome": "Andressa Alves",
        "posicao": "Meio-campo",
        "clube": "Corinthians",
        "foto": "https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2023/07/2cc4545c-597b-497e-adde-05a569b14239-aspect-ratio-512-320.jpg",
        "gols": 15,
        "assistencias": 10,
        "jogos": 28,
        "favorita": false
    },
    {
        "nome": "Dayana Rodríguez",
        "posicao": "Meio-campo",
        "clube": "Corinthians",
        "foto": "https://cdn.meutimao.com.br/_upload/jogador/dayana-lisset-rodriguez-leon-no-corinthians_x_corinthians.jpg",
        "gols": 5,
        "assistencias": 12,
        "jogos": 30,
        "favorita": false
    },
    {
        "nome": "Mariza",
        "posicao": "Zagueira",
        "clube": "Corinthians",
        "foto": "https://lncimg.lance.com.br/uploads/2025/04/54426124441_e3ca51739b_o-scaled-aspect-ratio-512-320.jpg",
        "gols": 2,
        "assistencias": 1,
        "jogos": 32,
        "favorita": false
    },
    {
        "nome": "Thaís Regina",
        "posicao": "Zagueira",
        "clube": "Corinthians",
        "foto": "https://s2-ge.glbimg.com/7UA07SDXPk5yVFubd3aw78Gy-zM=/0x0:853x568/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/P/E/4lzuxnQ2yvEy5BIoyvpg/whatsapp-image-2023-01-17-at-18.18.13.jpeg",
        "gols": 1,
        "assistencias": 2,
        "jogos": 25,
        "favorita": false
    },
    {
        "nome": "Letícia Teles",
        "posicao": "Zagueira",
        "clube": "Corinthians",
        "foto": "https://s2-ge.glbimg.com/aQslkG7XfRhUoQxg89HFMaL07kE=/0x0:1280x854/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/g/h/jumb6ASY2H6c8odpomFA/whatsapp-image-2021-03-06-at-14.33.14.jpeg",
        //slc ma fase
        "gols": 0,
        "assistencias": 0,
        "jogos": 18,
        "favorita": false
    }
];

// Variavel para guardar no local storage
let jogadorasGuardar = [];

const jogadorasContainer = document.getElementById('jogadorasContainer');

document.addEventListener('DOMContentLoaded', () => {
    carregarLocalStorage();
});


function carregarLocalStorage() {
    const stored = localStorage.clear('jogadorasGuardar');
    if (stored) {
        jogadorasGuardar = JSON.parse(stored);
    } else {
        jogadorasGuardar = jogadorasIniciais;
        localStorage.setItem('jogadorasGuardar', JSON.stringify(jogadorasGuardar));
    }
    carregarJogadoras();
}

function criarJogadorasCard(jogadoras) {
    const card = document.createElement('div');
    card.className = 'jogadoras-card';
    card.dataset.id = jogadoras.id;
    
    card.innerHTML = `
        <img src="${jogadoras.foto}" alt="${jogadoras.nome}" class="jogadoras-imagem">
        <div class="jogadoras-info">
            <h3 class="jogadoras-nome">${jogadoras.nome}</h3>
            <p class="jogadoras-detalhes">${jogadoras.posicao} • ${jogadoras.clube}</p>
            <div class="jogadoras-status">
                <div class="status">
                    <div class="status-valor">${jogadoras.gols}</div>
                    <div class="status-label">Gols</div>
                </div>
                <div class="status">
                    <div class="status-valor">${jogadoras.assistencias}</div>
                    <div class="status-label">Assistências</div>
                </div>
                <div class="status">
                    <div class="status-valor">${jogadoras.jogos}</div>
                    <div class="status-label">Jogos</div>
                </div>
            </div>
            <div class="jogadoras-botoes">
                <button class="btn-favoritar ${jogadoras.favorita ? 'active' : ''}">★</button>
                <div>
                    <button class="btn-editar">Editar</button>
                    <button class="btn-deletar">Excluir</button>
                </div>
            </div>
        </div>
    `;
    
    return card;
}


function salvarLocalStorage() {
    localStorage.setItem('jogadorasGuardar', JSON.stringify(jogadorasGuardar));
}


function carregarJogadoras() {
  jogadorasContainer.innerHTML = ''; 
  jogadorasIniciais.forEach(jogadoras => {
    const card = criarJogadorasCard(jogadoras);
    jogadorasContainer.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', carregarJogadoras);

