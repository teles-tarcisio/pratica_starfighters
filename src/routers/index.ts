import { Router } from "express";

import battleRouter from "./battleRouter.js";
import rankRouter from "./rankingRouter.js";

const mainRouter = Router();
mainRouter.use(battleRouter);
mainRouter.use(rankRouter);

export default mainRouter;
