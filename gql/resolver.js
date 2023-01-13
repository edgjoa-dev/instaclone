const userController = require('../controllers/user')

const resolvers = {

Query: {
    getUser: (_, {id, userName} )=> userController.getUser(id, userName),
},

Mutation: {
    register: ( _, {input}) => userController.register(input),
    login: ( _, {input}) => userController.login(input),
},

}
module.exports = resolvers;