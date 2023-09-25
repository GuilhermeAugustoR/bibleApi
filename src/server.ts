import express from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(router);

var corsOptions = {
  origin: "https://bible-api-nv.vercel.app",
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
