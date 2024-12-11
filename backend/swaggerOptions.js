// swaggerOptions.js
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "My API", // API:n nimi
    version: "1.0.0", // API:n versio
    description: "A simple Express API documentation", // API:n kuvaus
  },
  servers: [
    {
      url: "http://localhost:5173", // Palvelimen URL
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // Polku, joka osoittaa kaikki API:n reitit
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
