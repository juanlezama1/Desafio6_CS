import {Schema, model} from "mongoose"

// Prototipo de un usuario en la DB

const userSchema = new Schema ({
    nombre: String,
    apellido: String,
    password: String,
    edad: Number,
    email: {
        type: String,
        unique: true, // Acá indico que el email es un valor único y no puede repetirse en dos documentos diferentes.
    }
})

// Exporto este prototipo como una colección

export const userModel = model ("users", userSchema)