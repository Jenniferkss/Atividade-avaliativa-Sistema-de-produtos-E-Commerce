import express from "express";
import dotenv from "dotenv";
import produtosRoutes from "./../Atividade-Avaliativa_Jennifer-Ketelin-Santos-Silva/src/routes/produtosRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.use("/produtos", produtosRoutes);

app.listen(serverPort, () => {
  console.log(`O servidos esta rodando em http://localhost:${serverPort}`);
});
