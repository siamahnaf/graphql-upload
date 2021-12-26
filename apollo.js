const {ApolloServer} = require("apollo-server-express");
const typeDefs = require("./TypeDefs/main");
const resolvers = require("./Resolvers/main");

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

module.exports = apolloServer;