const express=require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors=require('cors');
const app=express();
app.use(cors())
app.use(express.json())

const port=process.env.PORT || 5000;
// user : userdb2
//password: bK5CjINWqHaaXuap



const uri = "mongodb+srv://userdb2:bK5CjINWqHaaXuap@cluster0.t90v0gz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{
        const userCollection=client.db('crudDb').collection('users');

        app.post("/users", async(req,res)=>{
            const newUser=req.body;
            console.log(newUser);
            const result=await userCollection.insertOne(newUser);
            res.send(result);
        })

        // const result=await userCollection.insertOne(user);
        // console.log(result);

    }
    finally{

    }

}
run().catch(error=>console.error(error))


app.use(cors())
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("CRUD Server is Running ")
})

app.listen(port,()=>{
    console.log(`Port running this prrt is ${port}`);
})