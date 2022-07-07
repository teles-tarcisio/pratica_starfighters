import { Request, Response, NextFunction } from "express";
export default async function errorHandler(error, req: Request, res: Response, next: NextFunction) {
  console.error(error);
  if (error.type === "notFound") {
    return res.status(404).send(error.message);
  }

  if (error.type === "conflict") {
    return res.status(409).send(error.message);
  }

  if (error.type === "unprocessableEntity") {
    return res.status(422).send(error.message);
  }

  if (error.type === "unauthorized") {
    return res.status(401).send(error.message);
  }
  
  return res.status(500).send("Internal Server Error");
}