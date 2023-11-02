const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb+srv://dudwls1225:zf67LA6wR6154Q7u@cluster0.chpelay.mongodb.net/spa_mall")
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;