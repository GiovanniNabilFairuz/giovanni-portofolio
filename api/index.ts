import { handle } from "hono/vercel";
import app from "../worker/index";

export const config = {
  runtime: "edge",
};

export default handle(app);

