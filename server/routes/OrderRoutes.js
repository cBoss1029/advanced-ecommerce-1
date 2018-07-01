let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/ControllerFile');

router.get('/orders', list); //Whole array
router.get('/path/:id', show); // Single item
router.post('/orders', create);
router.put('/path/:id', update);
router.delete('/path/:id', remove);
module.exports =  router;