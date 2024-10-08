const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Definição global da variável produtos
const produtos = [
  { id: 1, nome: 'Produto 1', descricao: 'produto 1' },
  { id: 2, nome: 'Produto 2', descricao: 'produto 2' },
  { id: 3, nome: 'Produto 3', descricao: 'produto 3' },
];

// Configurar o Handlebars como motor de template
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Definir a pasta 'public' para arquivos estáticos
app.use(express.static('public'));

// Rota da página inicial
app.get('/', (req, res) => {
  res.render('home', { produtos: produtos });
});

// Rota da página do produto
app.get('/produtos/:id', (req, res) => {
  const idProduto = req.params.id;
  const produto = produtos.find(p => p.id === parseInt(idProduto));

  res.render('produto', { produto: produto });
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000!');
});