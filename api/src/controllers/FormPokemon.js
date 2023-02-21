const { Pokemon } = require('../db');

const postPokemon = async (name, life, attack, defense, speed, height, weight, image) => {
    try {
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
    } catch (error) {
        console.error(error.message)
    }
};

module.exports = { postPokemon };