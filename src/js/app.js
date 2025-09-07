// Jogadoras q o senhor pediu como base

const jogadorasIniciais = [
    {
        "id": 1,
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
        "id": 2,
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
        "id": 3,
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
        "id": 4,
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
        "id": 5,
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


// Coisas q acontecem quando o site carrega na hora ta maluco, e quase sempre na verdade? (meio q isso) 

            // Variável para guardar no local storage
            let jogadorasGuardadas = [];

            // Variável para o negocio de organizar por nome/posição, e como eu quero q ela possa ser tanto de A-Z ou Z-A eu deixo como let
            let ordemAtual = { campo: null, direcao: 'asc' };

            // Constante para ordem de nomes e posição
            const ordemNomeBtn = document.getElementById('ordemNome');
            const ordemPosicaoBtn = document.getElementById('ordemPosicao');

            // Constante do campo q vai ter as cartas de jogadoras, pra dps jogar tudo aq
            const jogadorasContainer = document.getElementById('jogadorasContainer');

            // Constante da barra de pesquisa para posição ou time
            const pesquisarInpt = document.getElementById('pesquisar');

            // Constante de adicionar novas jogadoras
            const adicionarJogadoraBtn = document.getElementById('adicionarJogadora');

            // Abrir e fechar o formulario
            const jogadoraModal = document.getElementById('jogadoraModal'); 
            const fecharModal = document.querySelector('.fechar'); 
            const jogadoraFormulario = document.getElementById('jogadoraFormulario'); 


            // Acontece quando a página inicia
            document.addEventListener('DOMContentLoaded', () => {
                setupEventListeners();
                carregarLocalStorage();
            });

            // Event listeners
            function setupEventListeners() {
                // Botões de organização, dependendo de onde foi clicado chamam a mesma função mas com argumentos diferentes, argumentos q são 'campos' das jogadoras
                ordemNomeBtn.addEventListener('click', () => ordemJogadoras('nome'));
                ordemPosicaoBtn.addEventListener('click', () => ordemJogadoras('posicao'));
                pesquisarInpt.addEventListener('input', carregarJogadoras);
                adicionarJogadoraBtn.addEventListener('click', abrirCampo);

                fecharModal.addEventListener('click', fecharCampo);

                // Eventos do formulário
                jogadoraFormulario.addEventListener('submit', enviarForm);

                // Fechar se clicar fora do conteúdo do modal
                window.addEventListener('click', (e) => {
                    if (e.target === jogadoraModal) {
                        fecharCampo();
                    }
                });
            }

            // Carrega o local Storage, se tiver algo salvo ele passa pro site chamando a função carregarJogadoras, se n tiver ele salva as jogadoras iniciais no local sotrage
            function carregarLocalStorage() {
                const stored = localStorage.getItem('jogadorasGuardadas');
                if (stored) {
                    jogadorasGuardadas = JSON.parse(stored);
                } else {
                    jogadorasGuardadas = jogadorasIniciais;
                    localStorage.setItem('jogadorasGuardadas', JSON.stringify(jogadorasGuardadas));
                }
                carregarJogadoras();
            }

            // Cria as cartas das jogadoras, é chamado no CarregarJogadoras()
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
                
                //tenho q chamar isso aq dentro pq se chamo fora ela as vezes n existe e trava tudo, aq dentro pelo menos ela sempre vai achar oq precisa
                const favoritarBtn = card.querySelector('.btn-favoritar');
                const deletarBtn = card.querySelector('.btn-deletar');
                
                favoritarBtn.addEventListener('click', () => ativarFavorito(jogadoras.id));
                deletarBtn.addEventListener('click', () => deletarJogadora(jogadoras.id));

                return card;
            }
                    
            // Carrega o jogadorasContainer, é chamado pela função carregarLocalStorage(), e pela função ordemJogadoras()
            function carregarJogadoras() {
                const pesquisa = pesquisarInpt.value.toLowerCase();
                
                let jogadorasFiltradas = [...jogadorasGuardadas];

                // Filtrar jogadoras
                jogadorasFiltradas = jogadorasFiltradas.filter(jogadoras => {
                    const nomeCerto = jogadoras.nome.toLowerCase().includes(pesquisa) || 
                                    jogadoras.posicao.toLowerCase().includes(pesquisa);
                    
                    return nomeCerto;
                });

                // Organiza com base na ordem q ta definida asc, ou desc (AZ / Z-A)
                if (ordemAtual.campo) {
                    jogadorasFiltradas.sort((a, b) => {
                        let valorA = a[ordemAtual.campo].toLowerCase();
                        let valorB = b[ordemAtual.campo].toLowerCase();

                        if (valorA < valorB) return ordemAtual.direcao === 'asc' ? -1 : 1;
                        if (valorA > valorB) return ordemAtual.direcao === 'asc' ? 1 : -1;
                        return 0;
                    });
                }
                                                                                                
                jogadorasContainer.innerHTML = ''; 
                jogadorasFiltradas.forEach(jogadoras => {
                    const card = criarJogadorasCard(jogadoras);
                    jogadorasContainer.appendChild(card);
                });
                    
            }

// FUNÇÕES Q ACONTECEM PQ O USUARIO FAZ ACONTECER (as vezes)

function salvarJogadoras() {
    localStorage.setItem('jogadorasGuardadas', JSON.stringify(jogadorasGuardadas));
}

// Define a ordem q vai ser usada no carregar jogadoras, A-Z ou Z-A, muda quando clica no ordenar nome ou posição, é chamado no setupEventListener()
function ordemJogadoras(campo) {
    if (ordemAtual.campo === campo) {
        // A-Z -> Z-A se clicar no botão mais de uma vez
        ordemAtual.direcao = ordemAtual.direcao === 'asc' ? 'desc' : 'asc';
    } else {
        // A-Z
        ordemAtual.campo = campo;
        ordemAtual.direcao = 'asc';
    }
    carregarJogadoras();
}

// Alternar favorito
function ativarFavorito(jogadoraId) {
    const jogadorasIndentificador = jogadorasGuardadas.findIndex(j => j.id === jogadoraId);
    
    if (jogadorasIndentificador !== -1) {
        jogadorasGuardadas[jogadorasIndentificador].favorita = !jogadorasGuardadas[jogadorasIndentificador].favorita;
        salvarJogadoras();
        carregarJogadoras();
    }
}

// Abrir modal
function abrirCampo() {
    jogadoraModal.style.display = 'flex';
}

// Fechar modal
function fecharCampo() {
    jogadoraModal.style.display = 'none';
    jogadoraFormulario.reset();
}

// Manipular envio do formulário
function enviarForm(e) {
    e.preventDefault();
    // Define a constante de cada campo
    const nome = document.getElementById('JogadoraNome').value;
    const posicao = document.getElementById('jogadoraPosicao').value;
    const clube = document.getElementById('jogadoraClube').value;
    const foto = document.getElementById('jogadoraFoto').value;
    const gols = parseInt(document.getElementById('jogadoraGols').value);
    const assistencias = parseInt(document.getElementById('jogadoraAssistencias').value);
    const jogos = parseInt(document.getElementById('jogadoraJogos').value);

    //logica para achar o id da nova jogadora
    let novoId = 1;
    if (jogadorasGuardadas.length > 0) {
        novoId = jogadorasGuardadas[jogadorasGuardadas.length - 1].id + 1;
    }
    // Cria uma novaJogadora q vai ser adicionada no jogadorasGuardadas em breve
    const novaJogadora = {
        id: novoId,
        nome: nome,
        posicao: posicao,
        clube: clube,
        foto: foto,
        gols: gols,
        assistencias: assistencias,
        jogos: jogos,
        favorita: false
    };

    jogadorasGuardadas.push(novaJogadora);
    salvarJogadoras();
    carregarJogadoras();
    fecharCampo();
}

function deletarJogadora(jogadoraId) {
    const confirmar = confirm("Tem certeza que deseja excluir esta jogadora?");
    if (!confirmar) return;

    const jogadorasIndentificador = jogadorasGuardadas.findIndex(j => j.id === jogadoraId);
    
    if (jogadorasIndentificador !== -1) {
        jogadorasGuardadas.splice(jogadorasIndentificador, 1); 
        salvarJogadoras();
        carregarJogadoras();
    }
}
