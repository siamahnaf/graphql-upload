const {readFile, multipleReadFile} = require("../Middlewares/file");
const {SingleFile} = require("../Model/singleUploadModel");
const {MultipleFile} = require("../Model/multipleUpload");

module.exports = {
    Query: {
        greetings: () => {
            return "Hello World"
        }
    },
    Mutation: {
        singleUpload: async (_, {file}) => {
            const imageUrl = await readFile(file);
            const singlefile = new SingleFile({image: imageUrl});
            await singlefile.save();
            return {
                message: "Single file uploaded successfully!"
            }
        },
        multipleUpload: async (_, {file}) => {
            const imageUrl = await multipleReadFile(file);
            const multiplefile = new MultipleFile();
            multiplefile.images.push(...imageUrl);
            multiplefile.save();
            return {
                message: "Multiple File uploaded successfully!"
            }
        }
    }
} // That's it, Let's check it.
//Let's check it

// Let's create function for multiple File Upload