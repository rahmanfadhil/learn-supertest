const mongoose = require("mongoose");
const createServer = require("./server");

mongoose
  .connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })
  .then(() => {
    const app = createServer();
    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
