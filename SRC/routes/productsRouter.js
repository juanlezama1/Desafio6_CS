import { Router } from "express"
import ProductManager from '../config/ProductManager.js'
import { productModel } from "../models/products.js"
let gestor_productos = new ProductManager ('./SRC/DataBase/db.json')

const productsRouter = Router ()

productsRouter.get('/', async (req, res) => {
    const {limit} = req.query // Si no se mandó, tendrá el valor 'undefined'
    console.log("Enviando productos al cliente...")
    console.log(await productModel.find())
    // let my_products = await gestor_productos.getProducts()

    if (my_products === -1) // Caso de que la DB esté vacía
        res.status(200).render('templates/error', {error_description: "Sin productos por ahora"})
    
    else 
    
    {
        // En el caso de que la DB no esté vacía, devuelvo la cantidad solicitada
        // O todos los productos en caso que no esté definido el query param limit
        let cantidad_productos
        !limit? cantidad_productos = my_products.length: cantidad_productos = limit

        // Caso de que envíen un límite, pero no sea un número
        isNaN(cantidad_productos)? res.status(400).render('templates/error', {error_description: "El límite debe ser numérico"}): res.status(200).render('templates/home', {title: 'Mis Productos', subtitle: `Cantidad elegida: ${cantidad_productos}`, products: my_products.splice(0, cantidad_productos)})
    }

    console.log("Productos enviados!")
} )

productsRouter.get('/:pid', async (req, res) => {

    console.log("Enviando producto específico...")

    let product_code = req.params.pid // Obtengo el código del producto

    // Intento obtenerlo de la DB
    let my_product = await gestor_productos.getProductById(product_code)

    // Si no existe, doy el aviso. Caso contrario, lo envío
    console.log(my_product)
    my_product == -1 ? res.status(400).render('templates/error', {error_description: "El producto no existe"}) : res.status(200).render('templates/home_id', {title: 'Producto Seleccionado:', product: my_product})

    console.log("Producto enviado!")
})

export default productsRouter