import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;
app.listen(PORT, function () {
  console.info(` Server is running in port ${PORT}`);
});

app.get("/", function (req, res) {
  res.json({ message: "Welcome to the server. GET comfy" });
});

//==== CHARACTER ====

app.get("/character", async function (req, res) {
  const query = await db.query(`SELECT * FROM character`);
  res.json(query.rows);
});

app.post("/add-character", (req, res) => {
  const newCharacter = req.body;
  const query = db.query(
    `INSERT INTO character (name, age, gender, class, race, background, alignment, other) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [
      newCharacter.formValues.name,
      newCharacter.formValues.age,
      newCharacter.formValues.gender,
      newCharacter.formValues.class,
      newCharacter.formValues.race,
      newCharacter.formValues.background,
      newCharacter.formValues.alignment,
      newCharacter.formValues.other,
    ]
  );
  res.json("Data sent", query);
});

//==== ITEM GENERATOR ====

app.get("/item", async function (req, res) {
  const query = await db.query(`SELECT * FROM item`);
  res.json(query.rows);
});

app.post("/add-item", (req, res) => {
  const newItem = req.body;
  const query = db.query(
    `INSERT INTO item (item, itemsinfo) VALUES ($1, $2)`,
    [
      newItem.formValues.item,
      newItem.formValues.iteminfo,
    ]
  );
  res.json("Data sent", query);
});