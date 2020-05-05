# Comments

Projeto para commentários, é possível adicionar e ouvir os comentários.


# Tecnologias:
React.JS -> Projeto básico em React para adicionar comentários, 
Node.JS -> Usei Node.js server para pegar as APIs localmente.
Express.JS -> Utilizamos no Node como estrutura do lado do servidor.


# Modificações necessárias:
* Alterar usuário, senha, database (MySql) e porta caso necessário ../server/infrastructure/connection.js
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'xxxxxxx',
    database: 'comment'
})


# Instalação

cd server
npm i
npm start

cd server
npm i
npm start


# APIs:

GET: http://localhost:8080/comments

POST: http://localhost:8080/comments
{ "text":"8dsdhdhdhdhdhdhsd"}


# Server Side
Arquivos da pasta /server. Usa Express.JS com server side framework.

# Client Side
Arquivos da pasta /client. localhost:3000
