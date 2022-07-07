import { Request, Response, NextFunction } from "express";
import { checkGitHubUser } from "../services/checkGitHubUser.js";
import sumStargazers from "../utils/sumStargazers.js";


export async function validateGitHubUsers(req: Request, res: Response, next: NextFunction) {
  const firstName = res.locals.users.firstUser;
  const secondName = res.locals.users.secondUser;
  
  const first = await checkGitHubUser(firstName);
  const second = await checkGitHubUser(secondName);

  const firstTotal = sumStargazers(first);
  const secondTotal = sumStargazers(second);

  console.log(firstName, firstTotal);
  console.log(secondName, secondTotal); 

  
  return res.sendStatus(501);
}