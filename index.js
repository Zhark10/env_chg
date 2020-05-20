require("dotenv").config();
const app = require("http").createServer((req, res) => res.send("Ahoy!"));
const PORT = process.env.PORT || 3000;

const { pwd, API_KEY } = process.env;

app.listen(PORT, () => {
  console.log(`pwd: ${pwd}, API_KEY: ${API_KEY}`);
});
