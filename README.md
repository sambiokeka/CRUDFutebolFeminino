# Passa-a-Bola

Passa-a-Bola é uma aplicação web para gerenciar e visualizar jogadoras de futebol feminino. O usuário pode pesquisar, filtrar por clube, ordenar por nome ou posição, adicionar, editar e deletar jogadoras. Além disso, é possível marcar jogadoras como favoritas.  

**GIT HUB PAGES**:
https://sambiokeka.github.io/CRUDFutebolFeminino/

---

### Integrantes 

- **Erick Jooji** (RM: 564482)  
- **Luiz Dalboni** (RM: 564189)  
- **Matheus Tozarelli** (RM: 563490)  
- **Rafael Lorenzini** (RM: 563643)  
- **Rafael Peloso** (RM: 561343)  


## Funcionalidades

1. **Exibição de jogadoras em cards**  
   Cada card mostra:  
   - Foto  
   - Nome  
   - Posição  
   - Clube  
   - Gols, assistências e jogos  
   - Botões de favoritar, editar e deletar  

2. **Filtros e busca**  
   - Barra de pesquisa para filtrar por **nome** ou **posição**.  
   - Select para filtrar jogadoras por **clube**, sem repetir clubes.  
   - Mantém a opção selecionada mesmo após atualizar a lista de jogadoras.

3. **Ordenação**  
   - Botões para ordenar por **nome** ou **posição**.  
   - Alterna entre ordem A-Z e Z-A.

4. **Gerenciamento de jogadoras**  
   - Adicionar novas jogadoras com formulário modal.  
   - Editar jogadoras existentes.  
   - Deletar jogadoras com confirmação.  
   - Marcar/desmarcar como favorita.

5. **Persistência de dados**  
   - Todos os dados são salvos no **LocalStorage**, garantindo que alterações sejam mantidas ao recarregar a página.

---

## Estrutura do Projeto
```
Passa-a-Bola/
│
├─ index.html                # Página principal
├─ src/
│   ├─ css/
│   │   └─ style.css         # Estilos
│   └─ js/
│       └─ app.js            # Lógica de front-end (CRUD, filtros, ordenação)

```

---

## Como Rodar

1. Abra o `index.html` em qualquer navegador moderno (Chrome, Edge, Firefox).  
2. A aplicação carrega automaticamente as jogadoras iniciais, ou os dados salvos no **LocalStorage** se já houverem alterações anteriores.  
3. Use a barra de pesquisa e o select de clubes para filtrar jogadoras.  
4. Clique nos botões de ordenação para alterar a ordem das jogadoras.  
5. Clique em “Adicionar Jogadora” para incluir novas jogadoras.  
6. Use os botões nos cards para editar, deletar ou favoritar jogadoras.

---

## Como o filtro de clubes funciona

1. Quando a página carrega ou a lista de jogadoras muda, o **select de clubes** é atualizado chamando a função `atualizarFiltroTimes()`.  
2. Para evitar repetição de clubes, a função percorre `jogadorasGuardadas` e adiciona cada clube **uma única vez**:  

```js
const clubes = [];
jogadorasGuardadas.forEach(j => {
    if (!clubes.includes(j.clube)) {
        clubes.push(j.clube);
    }
});
````

3. Depois, cria um `<option>` para cada clube e mantém o valor selecionado:

```js
clubes.forEach(clube => {
    const option = document.createElement('option');
    option.value = clube;
    option.textContent = clube;
    select.appendChild(option);
});

// Mantém a seleção atual
select.value = valorAtual;
```

---

## Organização do Código

* **`carregarJogadoras()`**: Atualiza o container com os cards, aplica filtros e ordenação.
* **`criarJogadorasCard(jogadoras)`**: Cria os elementos do card de cada jogadora.
* **`atualizarFiltroTimes()`**: Atualiza o select de clubes sem duplicatas.
* **`salvarJogadoras()`**: Salva o estado atual em LocalStorage.
* **`ordemJogadoras(campo)`**: Alterna ordem A-Z/Z-A de nome ou posição.
* **`ativarFavorito(jogadoraId)`**: Alterna o status de favorita de uma jogadora.
* **`abrirCampo()` / `fecharCampo()`**: Abre e fecha o modal de adicionar/editar.
* **`enviarForm(e)`**: Adiciona ou edita jogadora a partir do formulário.
* **`deletarJogadora(jogadoraId)`**: Remove jogadora após confirmação.

---

## Observações

* A aplicação é totalmente **front-end**, utilizando apenas **HTML, CSS e JavaScript**.
* Todas as alterações permanecem mesmo após fechar o navegador, graças ao **LocalStorage**.
* O filtro de clubes é dinâmico e evita duplicatas, mantendo a seleção do usuário após atualização.


