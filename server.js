const express = require("express");
const PORT = 5000;
const app = express();
app.use(express.json());

const users = [
  { username: "alice", age: 25, email: "alice@example.com" },
  { username: "bob", age: 30, email: "bob@example.com" },
  { username: "charlie", age: 28, email: "charlie@example.com" },
];

// "/" endpoint to make sure the server is running
app.get("/", (req, res) => {
  res.json("Server running");
});

// "/user" endpoint to display message when a user try to retrive data without the email parameter
app.get("/user", (req, res) => {
  return res.json({ message: "User parameter cannot be empty" });
});

// "/user/:email" endpoint to retrive the data and return it as a response if found or will return an error message
app.get("/user/:email", (req, res) => {
  const email = req.params.email;

  const user = users.find((u) => u.email === email);

  if (user) {
    return res.status(200).json({ message: "User found!", data: user });
  }
  return res.status(400).json({ message: "User not found" });
});

app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
