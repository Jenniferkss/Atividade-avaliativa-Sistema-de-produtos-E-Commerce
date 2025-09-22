# Produtos E-Commerce

Este repositório contém um arquivo JSON com dados de produtos para um sistema de e-commerce.

### Estrutura dos Dados

O arquivo `produtos.json` é uma lista de objetos, onde cada objeto representa um produto com os seguintes campos:

-   **id**: Número de identificação único.
-   **nome**: Nome do produto.
-   **categoria**: Categoria do item (ex: "Eletrônicos").
-   **preco**: Preço do produto.
-   **estoque**: Quantidade disponível.
-   **marca**: Marca do produto.
-   **avaliacao**: Avaliação do produto em uma escala de 0 a 5.
-   **descricao**: Descrição detalhada do item.

### Como usar

Você pode utilizar este arquivo para popular um banco de dados, simular uma API ou usar em um ambiente de desenvolvimento.

---

### Exemplo de um produto

```json
{
  "id": 1,
  "nome": "Smartphone Samsung Galaxy S25",
  "categoria": "Eletrônicos",
  "preco": 4999.90,
  "estoque": 150,
  "marca": "Samsung",
  "avaliacao": 4.8,
  "descricao": "O mais novo smartphone da Samsung com câmera de 108MP e processador Exynos 2500."
}