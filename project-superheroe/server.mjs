import express from 'express';
import { obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresde30Controller, verSuperheroesController } from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3000;

app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);

app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);

app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresde30Controller);

app.get('/superheroes', verSuperheroesController);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});