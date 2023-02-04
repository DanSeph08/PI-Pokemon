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
            const dataDb = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const dataApi = await dataDb.data;

            const pokeApi = {
                id: dataApi.id,
                name: dataApi.name,
                life: dataApi.stats[0].base_stat,
                attack: dataApi.stats[1].base_stat,
                defense: dataApi.stats[2].base_stat,
                speed: dataApi.stats[5].base_stat,
                height: dataApi.height,
                weight: dataApi.weight,
                image: dataApi.sprites.other.dream_world.front_default,
                types: dataApi.types.map(elemt => {
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
