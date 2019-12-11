const app = require("./src/app");
const db = require("./src/config/database");

app.listen(3000, () => {
  console.log("Api rodando na porta");
  db();
});
