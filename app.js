const express = require("express");
const app = express();
const router = express.Router()

const PORT = process.env.PORT || 5000;

const products  = require("./routes/products")

app.get("/", (req, res) => {
  res.send("Hy");
});

app.use("/api/products", products)

//middleware or set router 
// debugger
// app.get("/", getAllProducts )



const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I m Connected `);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
module.exports = router