
class IRepository{
    obtenerPorId(id){
        throw new Error("Método 'obtenerPorId()' no implementado");
    }

    obtenerTodos(){
        throw new Error("Método 'obtenerTodos()' no implementado");
    }

    buscarPorAtributo(atributo, valor){
        throw new Error("Método 'buscarPorAtributo()' no implementado");
    }

    obtenerMayoresDe30(){
        console.log('Repositorio: Obtener superhéroes mayores de 30 años');
        throw new Error("Método 'obtenerMayoresDe30()' no implementado");
    }
}

export default IRepository;