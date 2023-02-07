const { Router } = require('express');
const { postPokemon } = require('../controllers/FormPokemon');
const { Type } = require('../db');
const router = Router();

router.post('/', async (req, res) => {
    try {
        const { name, life, attack, defense, speed, height, weight, image, types } = req.body;
        if (!name) throw new Error('A name is needed to create the pokemon');
        const pokeCreate = await postPokemon(name, life, attack, defense, speed, height, weight, image);
        if (pokeCreate) {
            const dbTypes = await Type.findOrCreate({ where: { name: types } });
            await pokeCreate.addType(dbTypes[0]);
            res.status(200).send(`The pokemon ${name} was created successfully`);
        }
        else {
            return res.status(404).send('Pokemon not created');
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = router;
