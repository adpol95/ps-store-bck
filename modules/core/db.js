// getting-started.js
const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const { DB_USERNAME, DB_PASSWORD, DB_CLUSTER } = process.env;
const connectionString = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}/ps-store`;

function dbConnect() {
  mongoose
    .connect(connectionString)
    .then(() => console.log("Mongo connection OK"))
    .catch((err) => console.log(err));
  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("CONNECTED");
  });
}

module.exports = dbConnect;
