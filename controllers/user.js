const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

function createToken( user, SECRET_KEY, expiresIn ){
    const { id, name, userName, email } = user

    const payload = {
        id,
        name,
        email,
        userName,
    }
    return jwt.sign( payload, SECRET_KEY, { expiresIn } );
}


async function register(input) {

    //Registro de uauario
    const newUser = input

    newUser.email = newUser.email.toLowerCase();
    newUser.userName = newUser.userName.toLowerCase();

    const { email, userName, password } = newUser

    //validar si el email ya esta en uso
    const emailValid = await User.findOne({email})
    if(emailValid) throw new Error('email ya se encuentra registrado')
    //validar si el userNasme ya esta en uso
    const userNameValid = await User.findOne({userName})
    if(userNameValid) throw new Error('nombre de usuario ya se encuentra registrado')

    //Encriptar el password
    const salt = await bcryptjs.genSaltSync(10);
    newUser.password = await bcryptjs.hash(password, salt);

    //Guardar newUser en DB
    try {
        const user = new User(newUser)
        user.save();
        return user;
    } catch (error) {
        console.log(error);
        }

}

async function login(input) {
    const { email, password } = input;

    //validar si el email es correcto
    const emailValid = await User.findOne({ email: email.toLowerCase() });
    if(!emailValid) throw new Error('Email o Password incorrectos')

    //validar si el password es correcto
    const passwordValid = await bcryptjs.compare( password, emailValid.password );
    if(!passwordValid) throw new Error('Email o Password incorrectos')

    return {
        token: createToken( emailValid, process.env.SECRET_KEY, '24h' ),
    }

}

async function getUser( id, userName ){
    let user = null;

    if(id) user = await User.findById(id);
    if(userName) user = await User.findOne({userName});

    if(!user)throw new Error('El usuario no existe');

    return user;
}

module.exports = {
    register,
    login,
    getUser,
}