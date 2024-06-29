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
            contentDiv.innerHTML = `
                <button onclick="showMenu()">Voltar ao Menu Principal</button>
            `;
            players.forEach(player => {
                const playerDiv = document.createElement('div');
                playerDiv.className = 'player';
                playerDiv.innerHTML = `
                    <h3>${player.nome}</h3>
                    <p><strong>Favorito:</strong> ${player.favorito}</p>
                    <p><strong>Habilidade:</strong> ${player.habilidadePlayer}</p>
                    <button onclick="editPlayer('${player.nome}')">Editar</button>
                    <button onclick="removePlayer('${player.nome}')">Remover</button>
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


function editPlayer(nome) {
    fetch(`/players/${nome}`)
        .then(response => response.json())
        .then(player => {
            const { nome, favorito, habilidadePlayer } = player;
            const form = `
                <form id="editPlayerForm">
                    <label for="nomeEdit">Nome:</label><br>
                    <input type="text" id="nomeEdit" name="nome" value="${nome}" readonly><br>
                    <label for="favoritoEdit">Personagem Favorito:</label><br>
                    <input type="text" id="favoritoEdit" name="favorito" value="${favorito}"><br>
                    <label for="habilidadePlayerEdit">Nível de Habilidade:</label><br>
                    <input type="number" id="habilidadePlayerEdit" name="habilidadePlayer" min="0" max="10" value="${habilidadePlayer}"><br>
                    <button type="button" onclick="updatePlayer('${nome}')">Salvar</button>
                    <button type="button" onclick="cancelEdit()">Cancelar</button>
                </form>
            `;
            document.getElementById('content').innerHTML = form;
        })
        .catch(error => console.error('Error fetching player:', error));
}

function updatePlayer(nome) {
    const form = document.getElementById('editPlayerForm');
    const favorito = form.favoritoEdit.value;
    const habilidadePlayer = form.habilidadePlayerEdit.value;

    fetch(`/players/${nome}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ favorito, habilidadePlayer }),
    })
    .then(response => response.json())
    .then(updatedPlayer => {
        alert('Player atualizado com sucesso!');
        showListPlayers();
    })
    .catch(error => console.error('Error updating player:', error));
}

function cancelEdit() {
    showListPlayers();
}

function removePlayer(nome) {
    if (confirm(`Tem certeza que deseja remover ${nome}?`)) {
        fetch(`/players/${nome}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                alert('Player removido com sucesso!');
                showListPlayers();
            } else {
                throw new Error('Erro ao remover player');
            }
        })
        .catch(error => console.error('Error removing player:', error));
    }
}

function exit() {
    document.getElementById('content').innerHTML = '<p>Saindo...</p>';
    setTimeout(() => {
        alert('Você saiu do menu.');
        showMenu();
    }, 1000);
}
