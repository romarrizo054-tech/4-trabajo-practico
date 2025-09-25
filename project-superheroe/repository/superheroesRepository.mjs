import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import SuperheroesDataSource from './superheroesDataSource.mjs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
export default class SuperheroesRepository extends SuperheroesDataSource {
    constructor(){
        super();
        this.filePath = path.join(dirname, '../superheroes.txt');
    }

    obtenerTodos(){
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data, null, 2); //convierte el archivo JSON en un array de objetos JS
    }


}