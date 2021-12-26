const {gql} = require("apollo-server-express");

const uploadTypeDefs = require("../uploadTypes");

const typeDefs = gql`
    scalar Upload
    type Query {
        _:String
    }
    type Mutation {
        _:String
    }
`;

module.exports = [
    typeDefs,
    uploadTypeDefs
]