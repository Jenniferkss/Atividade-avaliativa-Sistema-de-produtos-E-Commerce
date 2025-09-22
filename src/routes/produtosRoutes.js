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
  updateProduto,
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
router.put("/:id", updateProduto);

export default router;
