const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const dbUrl = process.env.ATLASDB_URL;
const mongoUrl = "mongodb://127.0.0.1:27017/vistada";
main()
    .then(() =>{
        console.log("Connection Successful");
    })
    .catch(err => {
        console.log(err);
    });
async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) =>({...obj, owner: "6813715dd0df13aa60e8736b"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
}
initDB();