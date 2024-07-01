import { StableBTreeMap, ic } from "azle";
import * as express from "express";
import { createServer } from "http";

const server = createServer((req, res) => {
  const app = express();
  app.use(express.json());

  app.post("/", (req, res) => {
    res.json({
      message: "Home route",
    });
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
