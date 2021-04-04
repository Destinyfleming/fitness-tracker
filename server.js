const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('tiny'))
app.use(express.static("public"));

app.use(require("./routes/API.js"));
app.use(require("./routes/html.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/activity", {
  useNewUrlParser: true,
  useFindAndModify: false
});

mongoose.connection.on('error', (err) => console.log(`error in db: ${err.message}`));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
