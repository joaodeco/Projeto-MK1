const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

let players = []

let planoTerreno = []

let liuKang = {
    nome: 'Liu Kang',
    habilidades: 'Força, agilidade, reflexos e resistência sobre humanas, nunchaku, controle de fogo',
    origem: 'Plano Terreno'
}
planoTerreno.push(liuKang)

let kungLao = {
    nome: 'Kung Lao',
    habilidades: 'Força, agilidade, reflexos e resistência sobre humanas,chapéu com láminas, teleporte, poderes espirituais',
    origem: 'Plano Terreno'
}
planoTerreno.push(kungLao)

let johnnyCage = {
    nome: 'Johnny Cage',
    habilidades: 'Força, agilidade, reflexos e resistência sobre humanas, karate, estilo de luta inesperado, punhos',
    origem: 'Plano Terreno'
}
planoTerreno.push(johnnyCage)

let raiden = {
    nome: 'Raiden',
    habilidade: 'Manipulação de raios a sua vontade, teleporte, bastão,voo',
    origem: 'Plano Terreno'
}
planoTerreno.push(raiden)

let sonyaBlade = {
    nome: 'Sonya Blade',
    habilidades: 'Força, agilidade, reflexos, energia rosa, armas de fogo em geral',
    origem: 'Plano Terreno'
}
planoTerreno.push(sonyaBlade)

let kenshi = {
    nome: 'Kenshi Takashi',
    habilidades: 'Força, agilidade, reflexos, telesinesia, manipulação de seu reflexo espiritual, espada',
    origem: 'Plano Terreno'
}
planoTerreno.push(kenshi)

let jaxBriggs = {
    nome: 'Jax Briggs',
    habilidades: 'Força, resistencia, braços de ferro que permitem ele atacar seus adversarios, armas de fogo ',
    origem: 'Plano Terreno'
}
planoTerreno.push(jaxBriggs)

let submundo = []

let skorpion = {
    nome: 'Skorpion, Hanzo Hasashi',
    habilidades: 'Usa uma kunai amarrada com uma corrente, manipulação de fogo do inferno, habilidades ninja, teleporte',
    origem: 'Submundo'
}
submundo.push(skorpion)

let noobSaibot = {
    nome: 'Noob Saibot, Bi-Han',
    habilidades: 'Manipulaçao de sua sombra, foice em meia lua, teleporte',
    origem: 'Submundo'
}
submundo.push(noobSaibot)

let quanChi = {
    nome: 'Quan Chi',
    habilidades: 'Feitiçaria do submundo, magia necromanciosa, espadas duplas',
    origem: 'Submundo'
}
submundo.push(quanChi)

let mundoExterior = []

let mileena = {
    nome: 'Mileena',
    habilidades: 'letal, rápida e extremamente ágil, usa duas sais(arma ninja)',
    origem: 'Mundo Exterior'
}
mundoExterior.push(mileena)

let kitana = {
    nome: 'Kitana',
    habilidades: 'letal, rápida e extremamente ágil, usa dois leques com laminas(irmã mais velha de mileena)',
    origem: 'Mundo Exterior'
}
mundoExterior.push(kitana)

let shaoKahn = {
    nome: 'Shao Kahn, General Shao',
    habilidades: 'lançar bolas de fogo, criar portais, absorver almas, martelo de guerra e muiiiita resistencia',
    origem: 'Mundo Exterior'
}
mundoExterior.push(shaoKahn)

let sindel = {
    nome: 'Sindel',
    habilidades: 'A capacidade de voar, manipular as ondas sonoras com seu grito sônico e usar seu cabelo comprido e letal nas lutas',
    origem: 'Mundo Exterior'
}
mundoExterior.push(sindel)

let baraka = {
    nome: 'Bakara',
    habilidades: 'Garras que saem da parte de cima de su punho e usa nas batalhas, dentes afiados e estilo de luta imprevisivel',
    origem: 'Mundo Exterior'
}
mundoExterior.push(baraka)

let shangTsung = {
    nome: 'Shang Tsung',
    habilidades: 'Shapeshifter, com o feiticeiro trocando entre sua versão mais nova e mais velha, além de copiar golpes do inimigo',
    origem: 'Mundo Exterior'
}
mundoExterior.push(shangTsung)

let reptile = {
    nome: 'Reptile',
    habilidades: 'Invisibilidade, disparar rajadas de acido e se transformar em um lagarto parcial ou completamente',
    origem: 'Mundo Exterior'
}
mundoExterior.push(reptile)

let reinoDoCaos = []

let havik = {
    nome: 'Havik',
    habilidades: 'Usa como quiser os seu membros para levar caos por onde passa',
    origem: 'Reino do Caos'
}
reinoDoCaos.push(havik)

let reinoDaOrdem = []

let hotaru = {
    nome: 'Bakara',
    habilidades: 'Manipulação de lava e plasma',
    origem: 'Reino da Ordem'
}
reinoDaOrdem.push(hotaru)

let edenia = []

let rain = {
    nome: 'Rain',
    habilidades: 'Manipulação de agua e usa um cajado',
    origem: 'Edenia'
}
edenia.push(rain)

let tanya = {
    nome: 'Tanya',
    habilidades: 'possui poderes ligados ao fogo, sendo capaz de se teleportar deixando um rastro de chamas para trás, lançar bolas de fogo e incendiar seus inimigos e usa um bastão',
    origem: 'Edenia'
}
edenia.push(tanya)

let dlc = []

let pacificador = {
    nome: 'Pacificado',
    habilidades: 'Mestre em artes marciais, estrategista, armas de fogo',
    origem: 'DC Comics'
}
dlc.push(pacificador)




