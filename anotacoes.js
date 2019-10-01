* =================================================================================================================================================== *
*                                                    				SEMANA OMNISTACK 9.0                                     			              *
* =================================================================================================================================================== *

--------------------------------------------------------------------- BACKEND -------------------------------------------------------------------------

yarn init -y // iniciar projeto
yarn add express // adicionar dependência express
yarn add nodemon // adicionar dependência nodemon

// GET, POST, PUT, DELETE
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

// Banco de dados criado no https://cloud.mongodb.com/ (MongoDB Atlas)
yarn add mongoose


//--------------------------------------------------------------
  "http://portquiz.net:27017/" => testar portas
//--------------------------------------------------------------


pastas MVC => Models Views Controllers


** Métodos controllers **
// index, show, store, update, destroy
index // retorna listagem de sessões
show // retorna uma única sessão
store, update e destroy // criar, atualizar e excluir


// Para upload de imagens, a requisição não poderá ser passada como formato JSON
// para isto, o formato escolhido é Multipart
yarn add multer // dependência que lida com requisições multipart, para upload de arquivos
