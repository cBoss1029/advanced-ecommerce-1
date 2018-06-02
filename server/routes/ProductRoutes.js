let express = require('express');
const router = express.Router();
let {list,show,create,update,remove} = require('../controllers/ProductControllers')
router.get('/products', list); //Whole array
router.get('/product/:id', show); // Single item
// router.post('/path', create);
// router.put('/path/:id', update);
// router.delete('/path/:id', remove);
module.exports = router;