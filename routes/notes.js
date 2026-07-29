var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");

// 自分のURIに変更
const uri = "mongodb+srv://hiroki49211_db_user:2124th@cluster0.7mqjvpd.mongodb.net/notes?appName=Cluster0";
const client = new MongoClient(uri);

router.get('/', async function(req, res, next) {

    await client.connect();

    const database = client.db("notes");
    const notes = database.collection("notes");

    const data = await notes.find({}).toArray();

    res.json(data);

    await client.close();

});

module.exports = router;