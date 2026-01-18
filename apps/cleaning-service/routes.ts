
import { Router } from "express";
import { handler } from "./controllers/cleaning-serviceController";
const r=Router();
r.get("/",handler);
export default r;
