const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getPokemonsAll = async () => {
    try {
        let pokimons = [];

        for (let i = 1; i <= 40; i++) {
            const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await pokemons.data;

            const pokis = {
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
            pokimons.push(pokis);
        }

        const pokimonsDb = await Pokemon.findAll({
            attributes: ['id', 'name', 'image', 'type'],
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        
        return [...pokimons, ...pokimonsDb];
    
    } catch (error) {
        console.error(error.message);
    }
};


        
module.exports = { getPokemonsAll };