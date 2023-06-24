const express = require("express");
const dbConnect = require("./config/dbConnect");
const serverless = require("serverless-http");

const app = express();
const mainRoute = require("./routes/mainRoute")
const cors = require("cors")


app.use(express.json())
app.use(cors())
app.use('/api/user', mainRoute)




exports.handler = serverless(app);

// Connect to the database
dbConnect().then(() => {
  console.log('Connected to the database');
}).catch((error) => {
  console.error('Error connecting to the database:', error);
});

// app.listen(5000,()=>{
//     console.log('server is running on port 5000')
//     dbConnect();
// })
