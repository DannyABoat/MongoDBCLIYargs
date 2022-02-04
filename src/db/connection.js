require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URL);

const connection = async () => {
  try {
    await client.connect();
    // console.log("Connected to db");
    const db = client.db("Movies");
    return db.collection("Movie");
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = { client, connection };