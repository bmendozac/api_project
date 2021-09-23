const express = require('express'); //sintaxis de importancia en nodejs
require('dotenv').config();
const {dbConection} = require('./config/database');
const cors = require('cors');

//crear el servidor express
const app = express();

//configurar cors
app.use(cors());

//estableciendo conexion a la db
dbConection();
//console.log(process.env);

//Rutas de la API proyectos
app.get('/', (req,res)=>{
    res.json({
        ok:true,
        msg: 'Bienvenidos a NodeJS'
    });
});

//Codigo para desplegar el servidor
app.listen(process.env.PORT,()=>{
    console.log('Servidor desplegado en el puerto:' + process.env.PORT)
})

