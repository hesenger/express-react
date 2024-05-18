import { app } from "./src/app";
import dotenv from "dotenv";
import { logProduction } from "./src/log";

dotenv.config();

const port = process.env.PORT || 3000;
const env = process.env.ENV;

app.listen(port, () => {
  logProduction(`[server]: Environment: ${env}`);
  logProduction(`[server]: Server is running at http://localhost:${port}`);
});
