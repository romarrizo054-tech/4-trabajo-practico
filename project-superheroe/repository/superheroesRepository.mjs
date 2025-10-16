
import Superheroe from '../models/superheroe.mjs';
import IRepository from '../repository/IRepository.mjs';  

class SuperheroesRepository extends IRepository{
    async obtenerPorId(id){
        return await Superheroe.findById(id);
    }

    async obtenerTodos(){
        return await Superheroe.find({});
    }

    async buscarPorAtributo(atributo, valor){
       
        const query = {};
        // Detectar si es número y que no sea una cadena vacia
        if (!isNaN(valor) && valor !== '') {
            query[atributo] = Number(valor);
        } else {
            // Ignorar las mayusculas y minusculas
            query[atributo] = new RegExp(valor, "i");
        }
        
        return await Superheroe.find(query);
    }
    
    async obtenerMayoresDe30(){
        console.log('Repositorio: Obtener superhéroes mayores de 30 años');
            return await Superheroe.find({edad: {$gte: 30}, planetaOrigen:'Tierra', 'poderes.1':{$exists: true}});


  }
}

export default new SuperheroesRepository();