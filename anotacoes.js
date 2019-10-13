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


=========== FUNCINALIDADES AVANÇADAS ============
yarn add socket.io // dependencia para o RealTime



--------------------------------------------------------------------- FRONTEND -------------------------------------------------------------------------

yarn create react-app frontend // criar projeto


yarn add axios // adicionar dependência axios

// para poder fazer a utilização do backend. Deverá ser instalada uma dependência chamada CORS
// no projeto backend realizar o seguinte comando:
yarn add cors
// deverá ser feita algumas inserções do cors no arquivo server.js do backend

yarn add react-router-dom

// novamente deverá ser feita outra alteração no backend. Dessa vez para carregar as imagens
// inserções no arquivo Spot.js do backend
// inserções no arquivo server.js do backend

=========== FUNCINALIDADES AVANÇADAS ============
yarn add socket.io-client // dependencia do socket.io para frontend



------------------------------------------------------------------------ MOBILE -----------------------------------------------------------------------------

// utilizaremos uma ferramenta chamada Expo para o deselvolvimento

npm install -g expo-cli // instalar expo client de forma global

// baixar app na play store chamado Expo

expo init mobile // iniciar projeto com nome mobile

yarn start

yarn add react-navigation
expo install react-native-gesture-handler react-native-reanimated

yarn add axios

=========== FUNCINALIDADES AVANÇADAS ============
yarn add socket.io-client // dependencia do socket.io para mobile