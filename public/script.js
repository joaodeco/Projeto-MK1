document.addEventListener('DOMContentLoaded', (event) => {
    showMenu();
});

function showMenu() {
    document.getElementById('content').innerHTML = '';
}

function showListPlayers() {
    fetch('/players')
        .then(response => response.json())
        .then(players => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = '';
            players.forEach(player => {
                const playerDiv = document.createElement('div');
                playerDiv.className = 'player';
                playerDiv.innerHTML = `
                    <h3>${player.nome}</h3>
                    <p><strong>Favorito:</strong> ${player.favorito}</p>
                    <p><strong>Habilidade:</strong> ${player.habilidadePlayer}</p>
                `;
                contentDiv.appendChild(playerDiv);
            });
        })
        .catch(error => console.error('Error fetching players:', error));
}

function showRegisterPlayer() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <form id="registerPlayerForm">
            <label for="nome">Nome:</label><br>
            <input type="text" id="nome" name="nome"><br>
            <label for="favorito">Personagem Favorito:</label><br>
            <input type="text" id="favorito" name="favorito"><br>
            <label for="habilidadePlayer">Nível de Habilidade:</label><br>
            <input type="number" id="habilidadePlayer" name="habilidadePlayer" min="0" max="10"><br>
            <button type="button" onclick="registerPlayer()">Cadastrar</button>
        </form>
    `;
}

function registerPlayer() {
    const form = document.getElementById('registerPlayerForm');
    const nome = form.nome.value;
    const favorito = form.favorito.value;
    const habilidadePlayer = form.habilidadePlayer.value;

    fetch('/players', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, favorito, habilidadePlayer }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Player cadastrado com sucesso!');
        showMenu();
    })
    .catch(error => console.error('Error registering player:', error));
}

function showListagemMenu() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <div id="listagemMenu">
            <button onclick="showReino('planoTerreno')">Plano Terreno</button>
            <button onclick="showReino('submundo')">Submundo</button>
            <button onclick="showReino('mundoExterior')">Mundo Exterior</button>
            <button onclick="showReino('reinoDoCaos')">Reino do Caos</button>
            <button onclick="showReino('reinoDaOrdem')">Reino da Ordem</button>
            <button onclick="showReino('edenia')">Edenia</button>
            <button onclick="showReino('dlc')">DLC</button>
            <button onclick="showMenu()">Voltar ao Menu Principal</button>
        </div>
    `;
}

function showReino(reino) {
    fetch(`/reino/${reino}`)
        .then(response => response.json())
        .then(characters => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = '';
            characters.forEach(character => {
                const characterDiv = document.createElement('div');
                characterDiv.className = 'player';
                characterDiv.innerHTML = `
                    <h3>${character.nome}</h3>
                    <p><strong>Habilidades:</strong> ${character.habilidades}</p>
                    <p><strong>Origem:</strong> ${character.origem}</p>
                `;
                contentDiv.appendChild(characterDiv);
            });
        })
        .catch(error => console.error('Error fetching characters:', error));
}

function exit() {
    document.getElementById('content').innerHTML = '<p>Saindo...</p>';
    setTimeout(() => {
        alert('Você saiu do menu.');
        showMenu();
    }, 1000);
}



