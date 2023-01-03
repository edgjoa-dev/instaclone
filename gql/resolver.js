const resolvers = {

    Query: {

        getUser: ()=> {
            console.log('Obteniendo usuario');
            return null;
        },
    },

    Mutation: {
        register: ( _, {input} )=>{
            //User registered
            console.log('Registro de usuario ok');
            console.log(input);
            return input;
        },
    },
}
module.exports = resolvers;