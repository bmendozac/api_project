const {Schema, model} = require('mongoose');

//definicion del esquema para la coleccion de usuarios
const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    img:{
        type: String
    },
    role:{
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
    google:{
        type: Boolean,
        default: false
    },
});

//configuracion opcional para cambiar el _id por uid
//este cambio es soslo para fines visuales, la bd permacene con _id
UsuarioSchema.method('toJSON', function(){
    const {_v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

//Se exporta el modelo
//Por defecto moongose creara en mongodb un documento en plural: usuarios
module.exports = model ('Usuarios', UsuarioSchema);