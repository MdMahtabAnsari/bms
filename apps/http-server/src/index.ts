import express, { Request, Response } from "express";

import { prisma } from "@repo/db/client";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/signup", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const newUser = await prisma.user.create({
    data: {
      username,
      password,
    },
  });
  res.status(201).json(newUser);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
