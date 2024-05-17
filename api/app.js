const express = require("express");
const app = express();

// handling CORS
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const message = [
  { id: 1, name: "hello", description: "this is first sentence" },
  { id: 2, name: "world", description: "this is second sentence" },
  { id: 3, name: "my grace", description: "this is third sentence" },
  { id: 4, name: "you are", description: "this is fourth sentence" },
  { id: 5, name: "dearest", description: "this is fifth sentence" },
];
// route for handling requests from the angular client
app.get("/api/message", (req, res) => {
  res.json(message);
});

app.post("/api/message", (req, res) => {
  console.log(req.body);
  message.push(req.body);
  res.send(201);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
