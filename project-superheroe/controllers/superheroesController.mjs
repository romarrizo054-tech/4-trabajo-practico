
import{obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresde30} from '../services/superheroesService.mjs'

import{renderizarSuperheroe, renderizarListaSuperheroes} from '../views/responseView.mjs';

export async function obtenerSuperheroePorIdController(req, res)
{
    try {
          const {id} =req.params;
          const superheroe = await obtenerSuperheroePorId(id);
          console.log(superheroe);
           if(!superheroe)
           {
             return res.status(404).send({message: 'Superhéroe no encontrado'});
           }

           const superheroeFormateado = renderizarSuperheroe(superheroe);
           res.status(200).json(superheroeFormateado);
    } catch (error) {
       res.status(500).send({message: 'Error al obtener el superheroe', error:error.message});
    }
}

export async function obtenerTodosLosSuperheroesController(req, res){
    try {
        const superheroes = await obtenerTodosLosSuperheroes();
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({message: 'Error al obtener los superhéroes', error:error.message});
    }
}


export async function buscarSuperheroesPorAtributoController(req, res){
    try {
        const {atributo, valor} = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        if(superheroes.length === 0){
            return res.status(404).send({message: 'No se encontraron superhéroes que coincidan con la búsqueda'});
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({message: 'Error al buscar los superhéroes', error:error.message});
    }

}

export async function obtenerSuperheroesMayoresde30Controller(req, res){
    console.log('Controlador: Iniciando la obtención de superhéroes mayores de 30 años');
  try{
  
    console.log('Controlador: Obtener superhéroes mayores de 30 años');
    const superheroes = await obtenerSuperheroesMayoresde30();
    if(superheroes.length ===0){
        return res.status(404).send({message: 'No se encontraron superhéroes mayores de 30 años'});
    }
    console.log(`Controlador: Encontrados ${superheroes.length} superhéroes mayores de 30 años`);
    const superheroesFormateados = renderizarListaSuperheroes(superheroes);
    res.status(200).json(superheroesFormateados);
  } catch(error){

    console.error('Controlador: Error al obtener los superhéroes mayores de 30 años', error);
    res.status(500).send({message: 'Error al obtener los superhéroes mayores de 30 años', error:error.message});
  }
}
