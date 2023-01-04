const User = require('../models/user')
const bcryptjs = require('bcryptjs')

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
    const userNameValid = await User.findOne({email})
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

module.exports = {
    register,
}