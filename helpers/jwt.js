const jwt = require('jsonwebtoken');

//funcion que genera un JWT
const generarJWT = (uid) =>{
    return new Promise((resolve, reject)=>{
        const payload = {
            uid,
            //se puede agregar informcaion adicional
        };
        //JWT_SECRET es la firma que utilizara el servidor para generar JWT
        jwt.sign(payload, process.env.JWT_SECRET,{
            expiresIn: '12h'
        }, (err, token)=>{//callback
            if(err){
                console.log(err);
                reject('No se puede generar el JWT');
            }else{
                resolve(token);
            }
        });
    });
}

module.exports = {
    generarJWT,
}