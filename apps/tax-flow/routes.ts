
import { Router } from "express";
import { handler } from "./controllers/tax-flowController";
const r=Router();
r.get("/",handler);
export default r;
