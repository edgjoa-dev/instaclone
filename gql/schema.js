const { gql } = require("apollo-server")

const typeDefs = gql`

    type User {
        id: ID
        name: String
        userName: String
    }
    type Query {

        getUser: User
    }

`;

module.exports = typeDefs;
