const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

let players = [
    { nome: 'Conrado', favorito: 'Scorpion', habilidadePlayer: 8 },
    { nome: 'Carlos Assunção', favorito: 'Jhony Cage', habilidadePlayer: 8 },
    { nome: 'Eduardo', favorito: 'Sub Zero', habilidadePlayer: 8 },
    { nome: 'Gabrielzão', favorito: 'Liu Kang, ou não tbm cara joga com tudo', habilidadePlayer: 10 },
    { nome: 'Murilo', favorito: 'Rain', habilidadePlayer: 8 }
];

// Simulação de personagens por reino
const reinos = {
    planoTerreno: [
        { nome: 'Liu Kang', habilidades: 'Força, agilidade, reflexos e resistência sobre humanas, nunchaku, controle de fogo', origem: 'Plano Terreno' },
        { nome: 'Kung Lao', habilidades: 'Força, agilidade, reflexos e resistência sobre humanas,chapéu com láminas, teleporte, poderes espirituais', origem: 'Plano Terreno' },
        { nome: 'Johnny Cage', habilidades: 'Força, agilidade, reflexos e resistência sobre humanas, karate, estilo de luta inesperado, punhos', origem: 'Plano Terreno' },
        { nome: 'Raiden', habilidades: 'Manipulação de raios a sua vontade, teleporte, bastão,voo', origem: 'Plano Terreno' },
        { nome: 'Sonya Blade', habilidades: 'Força, agilidade, reflexos, energia rosa, armas de fogo em geral', origem: 'Plano Terreno' },
        { nome: 'Kanshi Takashi', habilidades: 'Força, agilidade, reflexos, telesinesia, manipulação de seu reflexo espiritual, espada', origem: 'Plano Terreno' },
        { nome: 'Jax Briggs', habilidades: 'Força, resistencia, braços de ferro que permitem ele atacar seus adversarios, armas de fogo ', origem: 'Plano Terreno' }
    ],
    submundo: [
        { nome: 'Quan Chi', habilidades: 'Feitiçaria do submundo, magia necromanciosa, espadas duplas', origem: 'Netherrealm' },
        { nome: 'Noob Saibot, Bi Ham', habilidades: 'Manipulaçao de sua sombra, foice em meia lua, teleporte', origem: 'Netherrealm' },
        { nome: 'Scorpion, Hanzo Hasashi', habilidades: 'Usa uma kunai amarrada com uma corrente, manipulação de fogo do inferno, habilidades ninja, teleporte', origem: 'Netherrealm' }
    ],
    mundoExterior: [
        { nome: 'Sindel', habilidades: 'A capacidade de voar, manipular as ondas sonoras com seu grito sônico e usar seu cabelo comprido e letal nas lutas', origem: 'Outworld' },
        { nome: 'Shao Kahn', habilidades: 'lançar bolas de fogo, criar portais, absorver almas, martelo de guerra e muiiiita resistencia', origem: 'Outworld' }
    ],
    reinoDoCaos: [
        { nome: 'Havik', habilidades: 'Usa como quiser os seu membros para levar caos por onde passa', origem: 'Chaosrealm' }
    ],
    reinoDaOrdem: [
        { nome: 'Kotal Kahn', habilidades: 'Poderes Solares, Sol', origem: 'Outworld' },
        { nome: 'Skarlet', habilidades: 'Maga de Sangue', origem: 'Outworld' }
    ],
    edenia: [
        { nome: 'Kitana', habilidades: 'Levitação', origem: 'Edenia' },
        { nome: 'Jade', habilidades: 'Armas', origem: 'Edenia' }
    ],
    dlc: [
        { nome: 'Spawn', habilidades: 'Demoníaco', origem: 'Hell' },
        { nome: 'Rambo', habilidades: 'Armas', origem: 'Earthrealm' },
        { nome: 'Omni-Man, Nolan Grayson', habilidades: 'Quase Invulnerabilidade. Cura Aprimorada. Capacidade Pulmonar Aprimorada.', origem: 'Série Invencivel' },
        { nome: 'Homelander', habilidades: 'Voar, super força e super audição, pode ver através de quase tudo (exceto zinco) com a sua visão de raio X e depois destruí-lo com os seus olhos laser', origem: 'Serie The Boys' },
        { nome: 'Pacificador', habilidades: 'Mestre em artes marciais, estrategista, armas de fogo', origem: 'DC Commics' }
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
