const { Router } = require('express');
const { getPokemonsId } = require('../controllers/IdPokemons');
const router = Router();


router.get('/pokemons/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let pokemoId = await getPokemonsId(id)
        res.status(200).send(pokemoId);
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = router;
