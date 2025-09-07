# CP1 - WebDev - CRUD

Nesta avaliação, você deverá desenvolver uma aplicação web que funcione como um sistema de cadastro de jogadoras de futebol feminino, permitindo inserir, listar, editar e excluir informações. O sistema utilizará como base de dados um JSON inicial carregado no LocalStorage, simulando um banco de dados local no navegador.

**Regras**

- A atividade **pode ser realizada individualmente, em duplas ou trios.**
- É **proibido** o uso de **comandos ou recursos que não foram abordados em sala de aula**. Caso queira utilizar algo que não foi abordado em sala, avise o professor previamente.
- Caso sejam detectados envios idênticos ou o uso inadequado de IA, os trabalhos serão analisados e passíveis de serem zerados.

**Entrega (via Teams)**

- Link do repositório no Github seguindo melhores práticas(README, uso de branchs, commits padronizados).
- Link do site publicado no Github Pages. Insira o link no README ou na descrição do projeto no lado direito do repositório.
- Insira o nome dos integrantes no README.

**Enunciado**

Implemente uma aplicação web em HTML, CSS e JavaScript que permita gerenciar informações de jogadoras de futebol feminino.

A aplicação deve ter obrigatoriamente:

1. **Base de dados**
    - Carregar inicialmente o conjunto de jogadoras abaixo:
    
    ```jsx
    [
      {
        "nome": "Andressa Alves",
        "posicao": "Meio-campo",
        "clube": "Corinthians",
        "foto": "https://example.com/andressa.jpg",
        "gols": 15,
        "assistencias": 10,
        "jogos": 28,
        "favorita": false
      },
      {
        "nome": "Dayana Rodríguez",
        "posicao": "Meio-campo",
        "clube": "Corinthians",
        "foto": "https://example.com/dayana.jpg",
        "gols": 5,
        "assistencias": 12,
        "jogos": 30,
        "favorita": false
      },
      {
        "nome": "Mariza",
        "posicao": "Zagueira",
        "clube": "Corinthians",
        "foto": "https://example.com/mariza.jpg",
        "gols": 2,
        "assistencias": 1,
        "jogos": 32,
        "favorita": false
      },
      {
        "nome": "Thaís Regina",
        "posicao": "Zagueira",
        "clube": "Corinthians",
        "foto": "https://example.com/thais.jpg",
        "gols": 1,
        "assistencias": 2,
        "jogos": 25,
        "favorita": false
      },
      {
        "nome": "Letícia Teles",
        "posicao": "Zagueira",
        "clube": "Corinthians",
        "foto": "https://example.com/leticia.jpg",
        "gols": 0,
        "assistencias": 0,
        "jogos": 18,
        "favorita": false
      }
    ]
    ```
    
