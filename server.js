require("dotenv").config();

const express = require("express");
const app = express();

const PR_NUMBER = process.env.PR_NUMBER || "local";
const APP_VERSION = process.env.APP_VERSION || "dev";

app.get("/", (req, res) => {
  res.send(`Preview Env ✅ PR=${PR_NUMBER} | version=${APP_VERSION}`);
});

app.get("/health", (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
