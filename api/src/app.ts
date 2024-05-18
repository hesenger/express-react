import express, { Express } from "express";

export const app: Express = express();

app.use("/health", (_, res) =>
  res.json({ services: [{ http: "OK" }, { database: "N/A" }] }),
);
