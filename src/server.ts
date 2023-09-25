import express from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(router);

app.use(cors());

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
