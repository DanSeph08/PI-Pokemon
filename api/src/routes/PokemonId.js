const { Router } = require('express');
const { getPokemonsId } = require('../controllers/IdPokemons');
const router = Router();


router.get('/pokemons/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let pokeId = await getPokemonsId(id)
        res.status(200).send(pokeId);
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = router;
