const { Router } = require('express');
const cors = require('cors');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Allpokes = require('./PokemonAll');
const Idpokes = require('./PokemonId');
const Frompokes = require('./PokemonForm');
const Gettypes = require('./GetTypes');


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(cors());
router.use('/pokemons', Allpokes);
router.use('/', Idpokes);
router.use('/pokemon', Frompokes)
router.use('/types', Gettypes);


module.exports = router;
