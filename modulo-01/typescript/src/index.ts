import express, { request } from "express";

const app = express();

app.get("/", (request, response) => response.json({ message: "Olá, mundo!" }));

app.listen(3333, () => console.log("Servidor iniciado na porta 3333."));
