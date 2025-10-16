
import superheroesRepository from "../repository/superheroesRepository.mjs";



export async function obtenerSuperheroePorId(id){
    return await superheroesRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes(){
    return await superheroesRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor){
    return await superheroesRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresde30(){
    return await superheroesRepository.obtenerMayoresDe30();
}