const axios = require("axios");
const {loadDB} = require("./loadDB.JS");
 const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log("migrando api a bd")
  loadDB()
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
