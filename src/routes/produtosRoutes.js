import express from "express";
import {
    createProduto,
  deleteProduto,
  getAllProdutos,
  getProdutoAvaliacao,
  getProdutoPreco,
  getProdutosById,
  getProdutosCategoria,
  getProdutosMarca,
} from "./../controllers/produtosController.js";

const router = express.Router();

router.get("/", getAllProdutos);
router.get("/:id", getProdutosById)
router.get("/categoria/:categoria", getProdutosCategoria);
router.get("/marca/:marca", getProdutosMarca);
router.get("/preco/:preco", getProdutoPreco);
router.get("/avaliacao/:avaliacao", getProdutoAvaliacao);
router.post("/", createProduto);
router.delete("/:id", deleteProduto);


export default router;
