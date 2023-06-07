import express from "express";
import cors from "cors";

import { bullishCoins, solanaWallets } from "./constants";
import { getAllTokens, getWalletsBalance, getTPS } from "./utils";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/marketcap", async (req, res) => {
  try {
    const data = await getAllTokens(bullishCoins);
    res.status(200);
    res.send(data);
  } catch (err) {
    res.status(400);
    res.json({
      error: `${err}`,
    });
  }
});

app.get("/wallets", async (req, res) => {
  try {
    const wallets = await getWalletsBalance(solanaWallets);
    res.status(200);
    res.send(wallets);
  } catch (err) {
    res.status(400);
    res.json({
      error: `${err}`,
    });
  }
});

app.get("/tps", async (req, res) => {
  try {
    const tps = await getTPS(10);
    res.status(200);
    res.send(tps);
  } catch (err) {
    res.status(400);
    res.json({
      error: `${err}`,
    });
  }
});

app.get("/", async (req, res) => {
  res.sendStatus(200);
});
export async function startServer() {
  const port = process.env.PORT || "3000";
  app.listen(port, () => console.log(`Listening on :${port}`));
}
