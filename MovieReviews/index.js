import mongodb from "mongodb";
import app from "./server.js";

//import ReviewsDAO from "./dao/reviewsDAO.js";

const MongoClient = mongodb.MongoClient;

// const mongo_username = process.env['MONGODB_USERNAME'];
// const mongo_userpass = process.env['MONGODB_PASSCODE'];
 const mongo_username = 'anupbiswas';
 const mongo_userpass = 'pulak.biswas';

const uri = `mongodb+srv://${mongo_username}:${mongo_userpass}@cluster0.er8piif.mongodb.net/?retryWrites=true&w=majority`;
// const uri = "mongodb+srv://anupbiswas:<password>@cluster0.er8piif.mongodb.net/?retryWrites=true&w=majority";

//const port = process.env['APP_PORT'];
const port = 8001;


MongoClient.connect(
    uri,
    {
        maxPoolSize:50
    }
)
.catch(err =>{
    // console.err(err.stack);
    console.log(err);
    process.exit(1);
})
.then(async client =>{
    app.listen(port, ()=>{
        console.log(`Listening port ${port}`)
    })
})