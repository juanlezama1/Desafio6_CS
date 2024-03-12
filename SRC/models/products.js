import {Schema, model} from "mongoose"

// Prototipo de un producto en la DB

const productSchema = new Schema ({
    title: String,
    description: String,
    price: String,
    thumbnail: Number,
    id: Number,
    stock: Number,
    code: Number
})

// Exporto este prototipo en mi colección

export const productModel = model ("products", productSchema)