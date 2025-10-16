import express from 'express';

import{
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresde30Controller
} from '../controllers/superheroesController.mjs';


const router = express.Router();


router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/edad/mayores-30', obtenerSuperheroesMayoresde30Controller);

export default router;