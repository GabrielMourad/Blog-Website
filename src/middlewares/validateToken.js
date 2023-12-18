import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
//middlewares - functions that will execute before a route is reached
export const authenticationRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    res.status(401).json({ message: "No token, authorization denied" });
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) res.status(403).json({ message: "Invalid token. " });
    req.user = user; 
    next();
  });
};
