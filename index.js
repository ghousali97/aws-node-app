const express = require("express");
const appRouter = require("./routes/app");

const app = express();
app.use(appRouter);

app.listen(80, () => {
  console.log("Application started!");
});
