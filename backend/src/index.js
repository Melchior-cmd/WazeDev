const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const http = require ('http');

const routes = require ('./routes');
const { setupWebscoket} = require ('./websocket');

const app = express();
const server = http.Server(app);

setupWebscoket(server);

mongoose.connect('mongodb+srv://lucas:lucas@cluster0-xeq3y.mongodb.net/wazedev?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

//get
//post
//put
//delete

//Query params: request.query (filtros, ordenação , paginação , ...)
//Route Params: request.params ( Identificar um recurso na alteração ou remoção) 
// Body: request.body (Dados para criação ou alteração de um registro)
// MongoDB (Não-relacional)

server.listen (3333);