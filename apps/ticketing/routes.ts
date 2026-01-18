
import { Router } from "express";
import { handler } from "./controllers/ticketingController";
const r=Router();
r.get("/",handler);
export default r;
