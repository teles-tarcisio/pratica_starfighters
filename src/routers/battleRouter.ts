import { Router } from "express";
import {
  validateSchemaMiddleware,
  validateGitHubUsers,
} from "../middlewares/index.js";
import { battleSchema } from "../schemas/index.js";


const battleRouter = Router();

battleRouter.post("/battle", validateSchemaMiddleware(battleSchema),
  validateGitHubUsers,
  (req, res) => {
    return res.sendStatus(501);
  });

export default battleRouter;