import express, { response } from 'express';

const server = express();


server.get('/', (require, response) => {


    return response.send("Olá Dev")
})


export { server };