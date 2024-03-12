import multer from 'multer'
import __dirname from '../path.js'

// Configuración de mi multer

const storage = multer.diskStorage({

    // Destino de las imágenes que me mandarán

    destination: (req, file, cb) => {
        cb(null, __dirname + '/public/img')
    },
    

    // Nombre de cómo las guardaré

    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`)
    }
})


// Constante que usaré para gestionar mi multer. 

const upload = multer({storage: storage}) 

// La exporto para que esté disponible

export default upload