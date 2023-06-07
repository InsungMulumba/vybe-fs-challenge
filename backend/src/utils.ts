import { Connection, PublicKey } from "@solana/web3.js";
import get from "axios";

import { Token } from "./constants";

const solana = new Connection("https://solana-mainnet.rpc.extrnode.com/");
const priceAPI = "https://price.jup.ag/v4/price?ids=";

interface Coin extends Token {
  marketCap: number;
}
interface Wallet extends Token {
  balance: number;
}

async function getSingleWalletBalance(pubkey: string) {
  const balance = await solana.getBalance(new PublicKey(pubkey));
  return balance;
}

export async function getWalletsBalance(incompleteWallets: Token[]) {
  const wallets: Wallet[] = await Promise.all(
    incompleteWallets.map(async (x) => {
      return {
        ...x,
        balance: await getSingleWalletBalance(x.address),
      };
    })
  );
  return wallets;
}

async function getTokenTotalSupply(pubkey: string): Promise<number> {
  const data = await solana.getTokenSupply(new PublicKey(pubkey));
  return data!.value!.uiAmount!;
}

async function getTokenPrice(pubkey: string): Promise<number> {
  const tokenPrice = await get(`${priceAPI}${pubkey}`).then((resp) => {
    return resp.data?.data[pubkey].price;
  });
  return tokenPrice!;
}

export async function getAllTokens(incompleteCoins: Token[]) {
  const coins: Coin[] = await Promise.all(
    incompleteCoins.map(async (x) => {
      const tokenSupply = await getTokenTotalSupply(x.address);

      const tokenPrice = await getTokenPrice(x.address);
      return {
        ...x,
        marketCap: Number((tokenSupply * tokenPrice).toFixed(2)),
      };
    })
  );
  return coins;
}

export async function getTPS(numberOfSamples?: number) {
  const samples = await solana.getRecentPerformanceSamples(
    numberOfSamples ?? 10
  );
  const tps = samples.map((x) => {
    return Number((x.numTransactions / x.samplePeriodSecs).toFixed(2));
  });
  return tps;
}
