const { default: mongoose } = require( "mongoose" );

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    des: {
        type: String,
    },
    img: {
        type: String,
        required: true
    },
    oldPrice: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
})

const Product = mongoose.model('Product', productSchema);   
export default Product;
