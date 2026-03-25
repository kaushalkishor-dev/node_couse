const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const MONGO_URL = "mongodb+srv://1234:1234@cluster0.zhhf9pj.mongodb.net/";

let _db ; 

const mongodbConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      console.log(client);
      callback();
      _db = client.db('airbnb');
    })
    .catch((error) => {
      console.log("While connectiong to MongoDB : ", error);
    });
};

const getDB = () => {
  if(!_db){
    throw new Error('Mongo not connected');
  }
  return _db;
}

exports.mongodbConnect = mongodbConnect;
exports.getDB = getDB;