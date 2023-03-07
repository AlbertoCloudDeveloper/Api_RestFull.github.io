const mongoose = require ("mongoose")

const productoSchema = mongoose.Schema({
    name_producto: {
        type: String,
        required: true
    }, 
    precio:{
        type: Number, 
        required: true
    },
    img_url:{
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('Producto', productoSchema);