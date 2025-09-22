import express from "express";
import {
    createProduto,
  getAllProdutos,
  getProdutoAvaliacao,
  getProdutoPreco,
  getProdutosCategoria,
  getProdutosMarca,
} from "./../controllers/produtosController.js";

const router = express.Router();

router.get("/", getAllProdutos);
router.get("/categoria/:categoria", getProdutosCategoria);
router.get("/marca/:marca", getProdutosMarca);
router.get("/preco/:preco", getProdutoPreco);
router.get("/avaliacao/:avaliacao", getProdutoAvaliacao);
router.post("/", createProduto);

export default router;
