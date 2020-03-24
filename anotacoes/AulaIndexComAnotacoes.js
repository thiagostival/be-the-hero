const express = require('express');

const app = express();

app.use(express.json());

/**
 * Rota: É o conjunto completo que vai na barra de URL
 * Recurso: É o que vai depois da barra na URL, é um recurso que quer ser buscado e utilizado, uma tabela no BD, uma entidade;
 */

/**
 * MÉTODOS HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end; Quando acessa uma rota, uma URL, o navegador utiliza esse método;
 * POST: Criar uma informação no back-end; Ex: Cadastrar um usuário, com um formulário; 
 * PUT: Alterar uma informação no back-end;
 * DELETE: Deletar uma informação no back-end;
 */

/**
 * TIPOS DE PARÂMETROS:
 * 
 * Query params: 
 *  - Parâmetros nomeados enviados na rota após "?" com a finalidade de filtros, paginação;
 *  - Ex: listar os usuários com nome Thiago: http://localhost:3333/users?name=Thiago;
 *  - Quando queremos acessar um parâmetro vindo da requisição, um Query params, vamos utilizar um request.query;
 * 
 * Route params:
 *  - Parâmetros utilizados para identificar recursos;
 *  - Recursos específicos, único;
 *  - Ex: Buscar dados de um único usuário: app.get('/users/:id'); na rota:http://localhost:3333/users/1;
 *  - Não pode ser enviado parâmetros a mais, além dos que já estão sendo esperados;
 *  - Os Route params, são acessados através do request.params; 
 *  - Além de colocar o recurso a ser utilizado; Ex: app.get('/users/:id');
 * 
 * Request Body:
 *  - É o corpo da requisição, utilizado para criar ou alterar recursos;
 *  - É o que resta na rota;
 *  - É acessado através do request.body;
 *  - Também precisa definir o tipo de dado que está sendo passado pela request;
 *      Ex: json: app.use(express.json()); Essa declaração fica antes do código das rotas, requisições;
 *      Transforma o que está sendo passado pela requisisção que nesse caso é json, em algo entendivel pelo javascript;
 *  - Além de colocar o método HTTP que deseja, de criar ou alterar; 
 *      Ex: app.post('/users');
 */

/**
 * BANCO DE DADOS:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server;
 *   - SQL é o formato que utiliza para se comunicar com o BD;
 * 
 * NoSQL: MongoDB, CouchDB, etc;
 *   - Muito livre e pouco estruturado;
 */

 /**
  * Usando o driver do BD: Na hora de fazer alguma instrução, terá que escrever toda a sintaxe SQL: SELECT * FROM users;
  * 
  * Usando Query Builder: escreve as instruções em JavaScript: table('users').select('*');
  *   - Precisa instalar o Knex: npm install knex;
  *   - E depois instalar o banco de dados que se deseja: npm install sqlite3;
  */

/**
 * Request: guarda todos os dados que vem através da requisição, que está na rota;
 * Response: responsável por retorna uma resposta para o usuário; Ex: reposta em json, abaixo;
 * O console.log consegue acessar todos os parametros que são enviados na rota, e apresenta no console;
 */
app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Thiago Filipe Stival'
    });
});

app.listen(3333);

