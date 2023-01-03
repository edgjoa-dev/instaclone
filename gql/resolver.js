const resolvers = {

    Query: {

        getUser: ()=> {
            console.log('Obteniendo usuario');
            return null;
        }
    }

}
module.exports = resolvers;