const express = require("express");
const cors = require("cors")
const app = express();
const route = require("./src/routes/index")
// const port = 2010;
const port = process.env.PORT || 2011;

app.use(cors())
app.use(express.json())
app.use("/App/v1",route);
app.use("/uploads",express.static("uploads"))

app.get('/', function (req, res) {
  res.status(200).json({ message: 'Ya ini udah bisa diakses' });
});
app.listen(port,()=>{
  console.log(`Listening ${port} is successfully`)
})