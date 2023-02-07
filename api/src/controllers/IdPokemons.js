const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getPokemonsId = async (id) => {
    try {
        if (id.length > 10) {
            let pokeDb = await Pokemon.findAll({
                where: { id },
                include: {
                    model: Type,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            })
            return pokeDb;
        } else {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

            const pokeApi = {
                id: data.id,
                name: data.name,
                life: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speed: data.stats[5].base_stat,
                height: data.height,
                weight: data.weight,
                image: data.sprites.other.dream_world.front_default,
                types: data.types.map(elemt => {
                    return {
                        name: elemt.type.name,
                    }
                }),
            }
            return pokeApi;
        }
    } catch (error) {
        
    }
}

module.exports = { getPokemonsId };
