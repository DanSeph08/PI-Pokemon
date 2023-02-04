const { Router } = require('express');
const { getAllTypes } = require('../controllers/TypeGet');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const typeis = await getAllTypes();
        res.status(200).send(typeis);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

module.exports = router;