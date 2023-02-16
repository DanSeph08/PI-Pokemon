const { Pokemon } = require('../db');

const postPokemon = async (name, life, attack, defense, speed, height, weight, image) => {
    const creatPokemon = await Pokemon.create({
        name,
        life,
        attack,
        defense,
        speed,
        height,
        weight,
        image,
    })

    return creatPokemon;
};

module.exports = { postPokemon };