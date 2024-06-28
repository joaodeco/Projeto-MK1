const express = require('express');
const app = express();
const port = 3000;

let players = [
    { nome: 'Murilo', favorito: 'Rain', habilidadePlayer: 8 },
    { nome: 'Gabrielzão', favorito: 'Liu Kang', habilidadePlayer: 10 },
    { nome: 'Conrado', favorito: 'Scorpion', habilidadePlayer: 8 },
    { nome: 'Carlos Assunção', favorito: 'Jhony Cage', habilidadePlayer: 8 },
    { nome: 'Eduardo', favorito: 'Sub Zero', habilidadePlayer: 8 },
    { nome: 'Bruno', favorito: 'Qualquer um', habilidadePlayer: 9 }
];

let planoTerreno = [
    { nome: 'Liu Kang', habilidades: 'Força, agilidade, reflexos e resistência sobre humanas, nunchaku, controle de fogo', origem: 'Plano Terreno' },
    { nome: 'Kung Lao', habilidades: 'Força, agilidade, reflexos e resistência sobre humanas, chapéu com lâminas, teleporte, poderes espirituais', origem: 'Plano Terreno' },
    { nome: 'Johnny Cage', habilidades: 'Força, agilidade, reflexos e resistência sobre humanas, karate, estilo de luta inesperado, punhos', origem: 'Plano Terreno' },
    { nome: 'Raiden', habilidades: 'Manipulação de raios a sua vontade, teleporte, bastão, voo', origem: 'Plano Terreno' },
    { nome: 'Sonya Blade', habilidades: 'Força, agilidade, reflexos, energia rosa, armas de fogo em geral', origem: 'Plano Terreno' },
    { nome: 'Kenshi Takashi', habilidades: 'Força, agilidade, reflexos, telecinesia, manipulação de seu reflexo espiritual, espada', origem: 'Plano Terreno' },
    { nome: 'Jax Briggs', habilidades: 'Força, resistência, braços de ferro que permitem ele atacar seus adversários, armas de fogo', origem: 'Plano Terreno' }
];

let submundo = [
    { nome: 'Skorpion, Hanzo Hasashi', habilidades: 'Usa uma kunai amarrada com uma corrente, manipulação de fogo do inferno, habilidades ninja, teleporte', origem: 'Submundo' },
    { nome: 'Noob Saibot, Bi-Han', habilidades: 'Manipulação de sua sombra, foice em meia lua, teleporte', origem: 'Submundo' },
    { nome: 'Quan Chi', habilidades: 'Feitiçaria do submundo, magia necromanciosa, espadas duplas', origem: 'Submundo' }
];

let mundoExterior = [
    { nome: 'Mileena', habilidades: 'Letal, rápida e extremamente ágil, usa duas sais (arma ninja)', origem: 'Mundo Exterior' },
    { nome: 'Kitana', habilidades: 'Letal, rápida e extremamente ágil, usa dois leques com lâminas (irmã mais velha de Mileena)', origem: 'Mundo Exterior' },
    { nome: 'Shao Kahn, General Shao', habilidades: 'Lançar bolas de fogo, criar portais, absorver almas, martelo de guerra e muita resistência', origem: 'Mundo Exterior' },
    { nome: 'Sindel', habilidades: 'A capacidade de voar, manipular as ondas sonoras com seu grito sônico e usar seu cabelo comprido e letal nas lutas', origem: 'Mundo Exterior' },
    { nome: 'Baraka', habilidades: 'Garras que saem da parte de cima de seu punho e usa nas batalhas, dentes afiados e estilo de luta imprevisível', origem: 'Mundo Exterior' },
    { nome: 'Shang Tsung', habilidades: 'Shang Tsung é um feiticeiro e é capaz de lançar bolas de fogo de suas mãos, criar portais e absorver almas de outros guerreiros e tomando sua forma', origem: 'Mundo Exterior' },
    { nome: 'Reptile, Syzoth', habilidades: 'Habilidades de camuflagem, bolas de ácido que derretem os inimigos, teleporte', origem: 'Mundo Exterior' },
    { nome: 'Goro', habilidades: 'Força, agilidade, resistência, socos devastadores', origem: 'Mundo Exterior' },
    { nome: 'Kotal Kahn', habilidades: 'Lança uma faca, solta raios de luz em seus inimigos, super força, teletransporte', origem: 'Mundo Exterior' }
];

let reinoDoCaos = [
    { nome: 'Havik', habilidades: 'Capacidade de girar seu corpo e membros em ângulos impossíveis, podendo atacar seus adversários com chutes ou socos em locais inusitados', origem: 'Reino do Caos' }
];

let reinoDaOrdem = [
    { nome: 'Hotaru', habilidades: 'Força, agilidade, reflexos, telecinesia, manipulação de seu reflexo espiritual, espada', origem: 'Reino da Ordem' }
];

let edenia = [
    { nome: 'Jade', habilidades: 'Letal, rápida e extremamente ágil, usa bastão e projéteis letais (assassina do mundo exterior, Kitana e Mileena)', origem: 'Edenia' },
    { nome: 'Rain', habilidades: 'Capacidade de manipular a água, lançar bolas de água em seus inimigos, manipulação de raios', origem: 'Edenia' },
    { nome: 'Tanya', habilidades: 'Letal, rápida e extremamente ágil, usa bastão e projéteis letais (assassina do mundo exterior, Kitana e Mileena)', origem: 'DLC' }
];

let dlc = [
    { nome: 'Homelander', habilidades: 'Voar, super força e super audição, pode ver através de quase tudo (exceto zinco) com a sua visão de raio X e depois destruí-lo com os seus olhos laser', origem: 'Série the Boys' },
    { nome: 'Omni-Man, Nolan Grayson', habilidades: 'Quase Invulnerabilidade. Cura Aprimorada. Capacidade Pulmonar Aprimorada.', origem: 'Série Invêcivel'},
    { nome: 'Pacificador', habilidades: 'Mestre em artes marciais, estrategista, armas de fogo', origem: 'DC comics'}
];

app.use(express.json());
app.use(express.static('public'));

app.get('/players', (req, res) => {
    res.json(players);
});

app.post('/players', (req, res) => {
    const newPlayer = req.body;
    players.push(newPlayer);
    res.status(201).json(newPlayer);
});

app.get('/reino/:nome', (req, res) => {
    const nome = req.params.nome;
    let characters;

    switch (nome) {
        case 'planoTerreno':
            characters = planoTerreno;
            break;
        case 'submundo':
            characters = submundo;
            break;
        case 'mundoExterior':
            characters = mundoExterior;
            break;
        case 'reinoDoCaos':
            characters = reinoDoCaos;
            break;
        case 'reinoDaOrdem':
            characters = reinoDaOrdem;
            break;
        case 'edenia':
            characters = edenia;
            break;
        case 'dlc':
            characters = dlc;
            break;
        default:
            characters = [];
    }

    res.json(characters);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


