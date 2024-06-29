const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

let players = [
    { nome: 'Conrado', favorito: 'Scorpion', habilidadePlayer: 8 },
    { nome: 'Carlos Assunção', favorito: 'Jhony Cage', habilidadePlayer: 8 },
    { nome: 'Eduardo', favorito: 'Sub Zero', habilidadePlayer: 8 },
    { nome: 'Gabrielzão', favorito: 'Liu Kang', habilidadePlayer: 10 },
    { nome: 'Murilo', favorito: 'Rain', habilidadePlayer: 8 }
];

// Simulação de personagens por reino
const reinos = {
    planoTerreno: [
        { nome: 'Scorpion', habilidades: 'Fogo', origem: 'Netherrealm' },
        { nome: 'Sub Zero', habilidades: 'Gelo', origem: 'Earthrealm' }
    ],
    submundo: [
        { nome: 'Quan Chi', habilidades: 'Feitiçaria', origem: 'Netherrealm' },
        { nome: 'Noob Saibot', habilidades: 'Sombra', origem: 'Netherrealm' }
    ],
    mundoExterior: [
        { nome: 'Raiden', habilidades: 'Relâmpagos', origem: 'Heavens' },
        { nome: 'Shao Kahn', habilidades: 'Conquistador', origem: 'Outworld' }
    ],
    reinoDoCaos: [
        { nome: 'Havik', habilidades: 'Anarquia', origem: 'Chaosrealm' }
    ],
    reinoDaOrdem: [
        { nome: 'Kotal Kahn', habilidades: 'Sol', origem: 'Outworld' },
        { nome: 'Skarlet', habilidades: 'Sangue', origem: 'Outworld' }
    ],
    edenia: [
        { nome: 'Kitana', habilidades: 'Levitação', origem: 'Edenia' },
        { nome: 'Jade', habilidades: 'Armas', origem: 'Edenia' }
    ],
    dlc: [
        { nome: 'Spawn', habilidades: 'Demoníaco', origem: 'Hell' },
        { nome: 'Rambo', habilidades: 'Armas', origem: 'Earthrealm' }
    ]
};

app.get('/players', (req, res) => {
    res.json(players);
});

app.get('/players/:nome', (req, res) => {
    const nome = req.params.nome;
    const player = players.find(p => p.nome === nome);
    if (player) {
        res.json(player);
    } else {
        res.status(404).json({ message: 'Player não encontrado' });
    }
});

app.post('/players', (req, res) => {
    const newPlayer = req.body;
    players.push(newPlayer);
    res.status(201).json(newPlayer);
});

app.put('/players/:nome', (req, res) => {
    const nome = req.params.nome;
    const index = players.findIndex(p => p.nome === nome);
    if (index !== -1) {
        players[index] = { ...players[index], ...req.body };
        res.json(players[index]);
    } else {
        res.status(404).json({ message: 'Player não encontrado' });
    }
});

app.delete('/players/:nome', (req, res) => {
    const nome = req.params.nome;
    players = players.filter(p => p.nome !== nome);
    res.status(204).end();
});

// Rota para obter personagens por reino
app.get('/reino/:reino', (req, res) => {
    const reino = req.params.reino;
    const characters = reinos[reino];
    if (characters) {
        res.json(characters);
    } else {
        res.status(404).json({ message: 'Reino não encontrado' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
