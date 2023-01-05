const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

// usar ejs como view engine do express
app.set("view engine", "ejs");
app.set("views", "src/views");

// middlewares
app.use(express.json());

// executa antes da requisição e continua apenas quando next é chamado
app.use((req, res, next) => {
  console.log(`\n## Requisição feita ##`);
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"] ?? "Sem conteúdo"}`);
  console.log(`Date: ${new Date()}`);

  next();
});

app.get("/", async (req, res) => {
  res.render("index");
});

app.get("/views/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.render("users", { users });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando na porta ${port}`));
