//importa os módulos e aqruivos necessários
const request = require('supertest');
const server = require('../server.js');

const template = {
  title: 'Node API',
  version: '1.0.0'
}

//o que será executado antes de todos os testes
beforeAll(async () => {
   console.log('Iniciando TDD com jest!');
});

//o que será executado após todos os testes
afterAll(() => {
//o server close irá encerrar nossa aplicação, evitando problemas da porta já estar em uso
server.close();
console.log('servidor fechado');
});


describe('inicio dos testes', () => {
   //descrição do caso de testes
   test('acessa a rota da home e verifica o conteúdo que é exibido ', async () => {
      //qual a rota que ele deve acessar e qual requisição deve fazer
      const {text, status} = await request(server).get('/v1/');

      const response = JSON.parse(text);

      //qual o status esperado 
      expect(status).toBe(200);
      //se todos esses passos passarem, verifica o conteúdo exibido dentro desta rota
      expect(response).toEqual(template)

   });

});