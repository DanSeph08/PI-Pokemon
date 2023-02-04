const { Router } = require('express');
const { getPokemonsAll } = require('../controllers/AllPokemons');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const { name } = req.query;
        const allpokemon = await getPokemonsAll();

        if (name) {
            let namePoke = allpokemon.filter(resp => resp.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
            if (namePoke.length) return res.status(200).send(namePoke);  
            else { res.status(404).send('There are no Pokemon with this name') };
        }
        else {
            res.status(200).send(allpokemon);
        }

    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = router;