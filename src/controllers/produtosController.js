import dados from "../models/data.js";
const { produtos } = dados;

const getAllProdutos = (req, res) => {
  res.status(200).json({
    total: produtos.length,
    produtos: produtos,
  });
};
const getProdutosById = (req, res) => {
    let id = parseInt(req.params.id);
    const produto = produtos.find( p => p.id === id);
    
    if (produto) {
        res.status(200).json({
            sucess: true,
            produto: produto
        })
    }
    res.status(400).json({
        sucess: false, 
        message: "Produto não encontrado"
    })
};
const getProdutosCategoria = (req, res) => {
  let categoria = req.params.categoria;
  const produtoCategoria = produtos.filter((p) => p.categoria === categoria);

  if (categoria) {
    res.status(200).json({
      sucess: true,
      produtoCategoria: produtoCategoria,
    });
  }
  res.status(400).json({
    sucess: false,
    message: "Nenhum produto desta categoria foi encontrado",
  });

};
const getProdutosMarca = (req, res) => {
  let marca = req.params.marca;
  const produtoMarca = produtos.filter((p) => p.marca === marca);

  if (marca) {
    res.status(200).json({
      sucess: true,
      produtoMarca: produtoMarca,
    });
  }
  res.status(400).json({
    sucess: false,
    message: "Nenhum produto desta marca foi encontrado",
  });
};

const getProdutoPreco = (req, res) => {
  let preco = parseInt(req.params.preco);

  const produtoPreco = produtos.filter((p) => p.preco === preco);

  if (preco) {
    res.status(200).json({
      sucess: true,
      produtoPreco: produtoPreco,
    });
  }
  res.status(400).json({
    sucess: false,
    message: "Não existem produtos nesta faixa de preço",
  });
};
const getProdutoAvaliacao = (req, res) => {
  let avaliacao = parseInt(req.params.avaliacao);

  const produtoAvaliacao = produtos.filter((p) => p.avaliacao === avaliacao);

  if (avaliacao) {
    res.status(200).json({
      sucess: true,
      produtoAvaliacao: produtoAvaliacao
    });
  }
  res.status(400).json({
    sucess: false,
    message: "Não existem produtos com essa avaliação",
  });
};

const createProduto = (req,res) => {
    const {nome, categoria, preco, estoque,marca,avaliacao,descricao } = req.body;

    if(!nome && !categoria) {
        return res.status(400).json({
            sucess: false,
            message: "Os campos `nome e categoria` são obrigatorio para adicionar um produto!"
        });
    }
    if (!preco || preco <= 0) {
        return res.status(400).json({
            sucess: false,
            message: "O produto nao pode ser gratuito,o valor deve ser maior que 0"
        })
    } 
    if (!avaliacao || avaliacao <= 0 || avaliacao >= 5) {
        return res.status(400).json({
            sucess: false, 
            message: "A avaliação deve estar entre 0 e 5 estrelas"
        })
    }
    const novoProduto = {
        id: produtos.length +1,
        nome,
        categoria,
        preco,
        estoque,
        marca,
        avaliacao,
        descricao
    }

    produtos.push(novoProduto); 
    res.status(201).json({
        sucess: true,
        message: "Novo produto adicionado!",
        produto: novoProduto
    })
};

const deleteProduto = (req,res) => {
    let id = parseInt(req.params.id);
    const produtoParaRemover = produtos.find(p => p.id === id);
    if(!produtoParaRemover) {
        return res.status(404).json({
            sucess: false,
            message: "Este produto não existe"
        })
    }
    const produtosFiltrados = produtos.filter(produto => produto.id !== id);
    produtos.splice(0, produtos.length, ...produtosFiltrados);
    res.status(200).json({
    sucess: true,
    message: "Produto deletado com sucesso!!",
    produtoRemovido: produtoParaRemover
    })
};

const updateProduto = (req,res) => {
    const id = parseInt(req.params.id);
    const {nome, categoria, preco, estoque,marca,avaliacao,descricao } = req.body;

    if(isNaN(id)) {
        return res.status(400).json({
            sucess: false,
            message: "O id deve ser um número válido"
        })
    }

    const produtoExiste = produtos.find(produto => produto.id === id);
    if (!produtoExiste) {
        return res.status(400).json({
            sucess: false,
            message: "O produto não existe"
        })
    }
    if (preco <= 0) {
        return res.status(400).json({
            sucess: false,
            message: "O produto nao pode ser gratuito,o valor deve ser maior que 0"
        })
    } 
    if (avaliacao <= 0 || avaliacao >= 5) {
        return res.status(400).json({
            sucess: false, 
            message: "A avaliação deve estar entre 0 e 5 estrelas"
        })
    } 
    const produtosAtualizados = produtos.map(produto => {
        return produto.id === id
        ? {
            ...produto,
            ... (nome && {nome}),
            ...(categoria && {categoria}),
            ...(preco && {preco}),
            ...(estoque && {estoque}),
            ...(marca && {marca}),
            ...(avaliacao && {avaliacao}),
            ...(descricao && {descricao})
        }
        : produto; 
    });

    produtos.splice(0,produtos.length, ...produtosAtualizados);
    const produtoNovo = produtos.find(produto => produto.id === id); 

    res.status(200).json({
        sucess: true,
        message: "Produto atualizado com sucesso",
        produto: produtoNovo
    })
}
export {
  getAllProdutos,
  getProdutosById,
  getProdutosCategoria,
  getProdutosMarca,
  getProdutoPreco,
  getProdutoAvaliacao,
  createProduto,
  deleteProduto,
  updateProduto
};
