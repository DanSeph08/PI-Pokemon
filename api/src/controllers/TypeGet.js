const axios = require('axios');
const { Type } = require('../db');
const url = 'https://pokeapi.co/api/v2/type';

const getAllTypes = async () => {
    const types = await Type.findAll();

    if (!types.length) {
        const type = await axios.get(url);
        const resp = await type.data.results.map(elemt => {
            return {
                name: elemt.name,
                id: elemt.id
            }
        })
        await Type.bulkCreate(resp);
        const typeDb = Type.findAll()
            return typeDb;
    }
    else {
        return types;
    }
}

module.exports = { getAllTypes };