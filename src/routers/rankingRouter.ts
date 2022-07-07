import { Router } from "express";

const rankRouter = Router();

rankRouter.get("/ranking", (req, res) => {
  return res.send("reached ranking");
});

export default rankRouter;