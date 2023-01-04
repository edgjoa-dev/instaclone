const userController = require('../controllers/user')

const resolvers = {

    Query: {

        getUser: ()=> {
            console.log('Obteniendo usuario');
            return null;
        },
    },

    Mutation: {
        register: async( _, {input}) => userController.register(input)
    },

}
module.exports = resolvers;