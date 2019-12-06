const getEnvConfig = () => {
  switch(process.env.NODE_ENV) {
    case 'development':
      return '.env.development';
    case 'teste':
      return '.env.teste';
    case 'homolog':
      return '.env.homolog';
    default:
      return '.env.development'
  }
}

const dotenv = require('dotenv').config({
  path: getEnvConfig()
});

const { HTTP_PORT } = dotenv.parsed;

module.exports = {
  HTTP_PORT
};