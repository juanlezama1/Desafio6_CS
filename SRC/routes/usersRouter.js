import { Router } from "express"
import { userModel } from "../models/users.js"

const userRouter = Router ()

userRouter.get('/', async (req, res) => {
    try {
        const users = await userModel.find()
        res.status(200).send(users)
    }

    catch (error)

    {
        res.status(500).send("Error al consultar los usuarios: ", error)
    }
})

userRouter.post('/', async (req, res) => {
   
    try {

        // Desestructuro los datos recibidos por POST

        const {nombre, apellido, email, edad, password} = req.body

        // Creo el documento en la colección y guardo/envío el resultado
        const create_result = await userModel.create({nombre, apellido, email, edad, password})
        res.status(200).send(create_result)
    }
   
    catch (error)

    {
        res.status(500).send("Error al crear usuario: ", error)
    }
})

export default userRouter
