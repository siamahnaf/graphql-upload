const uploadResolvers = require("../uploadResolver");

const {GraphQLUpload} = require("graphql-upload");


const customResolvers = {
    Upload: GraphQLUpload
}
module.exports = [
    customResolvers,
    uploadResolvers
]