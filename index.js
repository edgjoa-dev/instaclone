const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server')
const typeDefs = require("./gql/schema")
const resolvers = require("./gql/resolver")

require("dotenv").config({ path: ".env" })


mongoose.set("strictQuery", false);

mongoose.connect( process.env.MONGODB_CNN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
(err, _)=>{
    if(err){
        console.log(err);
        console.log('Error de conexión')
    }else{
        console.log('Conexión Ok')
        server()
    }
}
);

function server() {
    const serverApollo = new ApolloServer({
        typeDefs,
        resolvers,
    });

    serverApollo.listen().then((response)=>{
        console.log("Servidor listening on");
    })
}