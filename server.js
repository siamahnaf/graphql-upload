require('dotenv/config');
const mongoose = require("mongoose");
const {graphqlUploadExpress} = require("graphql-upload");

const app = require("./app");
const apolloServer = require("./apollo");

async function startServer() {
    app.use(graphqlUploadExpress());
    await apolloServer.start();
    apolloServer.applyMiddleware({app});
    app.use('/', (req, res) => {
        res.send("Welcome to Graphql Upload!")
    })
};

startServer();

mongoose.connect(process.env.MONGODB_LOCAL_URL)
    .then(() => console.log("MongoDB Connected Successfully!"))
    .catch((err) => console.log("MongoDB Connection Failed!"));

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
    console.log(`Graphql EndPoint Path: ${apolloServer.graphqlPath}`);
})