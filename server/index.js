let express =require('express');
let bodyParser =require('body-parser');
let mongoose =require('mongoose');
let ProductRoutes =require('./routes/ProductRoutes');
let Product =require('./models/Product');
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://coryB:Drowssap21@ds241570.mlab.com:41570/advanced-ecommerce-1')



app.use(express.static('public'));
app.use(bodyParser.json());
app.use(ProductRoutes);


// let {products} = require('../src/state');

// products.forEach((p)=>{
//     const newProduct = new Product({
//         name: p.name,
//         description: p.description,
//         reviews: p.reviews,
//         rating: p.rating,
//         imgUrl: p.imgUrl,
//         price: p.price,
//     })

//     newProduct.save().then(savedProduct =>{
//         response.json(savedProduct)
//     })
// })

app.listen(3001, (err) => {
    if (err) {
    return console.log("Error", err);
    }
console.log("Listening on port 3001");
});