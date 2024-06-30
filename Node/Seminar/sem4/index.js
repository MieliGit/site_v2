const fs = require("fs");
const express = require("express");
const joi = require("joi");
const path = require("path");
const app = express();
const port = 3005;
const pathFile = path.join(__dirname, "users.json");

const userSchema = joi.object({
  name: joi.string().min(1).required(),
  surname: joi.string().min(1).required(),
  age: joi.number().min(1).required(),
  city: joi.string(),
});

let uniqueID = 3;
app.use(express.json());

app.get("/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathFile));
  res.send({ users });
});
app.get("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathFile));
  const user = users.find((e) => e.id === +req.params.id);
  if (user) {
    res.send({ user });
  } else {
    res
      .status(404)
      .send({ user: null, error: "User not found", status: "error" });
  }
});

app.put("/users/:id", (req, res) => {
  const validRes = userSchema.validate(req.body);
  if (validRes.error) {
    return res
      .status(404)
      .send({ user: null, error: validRes.error.details, status: "error" });
  }
  const users = JSON.parse(fs.readFileSync(pathFile));
  const user = users.find((e) => e.id === +req.params.id);
  if (user) {
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.age = req.body.age;
    user.city = req.body.city;

    fs.writeFileSync(pathFile, JSON.stringify(users, null, 2));
    res.send({ user });
  } else {
    res
      .status(404)
      .send({ user: null, error: "User not found", status: "error" });
  }
});

app.post("/users/", (req, res) => {
  const validRes = userSchema.validate(req.body);
  if (validRes.error) {
    return res
      .status(404)
      .send({ user: null, error: validRes.error.details, status: "error" });
  }

  const users = JSON.parse(fs.readFileSync(pathFile));
  const user = {
    id: uniqueID++,
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age,
    city: req.body.city,
  };
  users.push(user);
  fs.writeFileSync(pathFile, JSON.stringify(users, null, 2));
  res.send({ user });
});

app.delete("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathFile));
  const userIndex = users.findIndex((e) => e.id === +req.params.id);
  if (userIndex > -1) {
    users.splice(userIndex, 1);
    fs.writeFileSync(pathFile, JSON.stringify(users, null, 2));
    res.send({ status: "Ok" });
  } else {
    res
      .status(404)
      .send({ user: null, error: "User not found", status: "error" });
  }
});

app.listen(port, () => console.log(`${port}`));
