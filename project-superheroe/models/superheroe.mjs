import mongoose from 'mongoose';

const superheroeSchema = new mongoose.Schema({
    nombreSuperheroe: { type: String, required: true, trim: true }, // trim: true es una buena práctica
    nombreReal: { type: String, required: true },
    nombreSociedad: String,
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String , 
    poderes: [String],
    habilidadEspecial: String,
    aliados: [String],
    enemigos: [String],
    creador: String,
    createdAt: { type: Date, default: Date.now }
});
 

const superHeroe = mongoose.model('Superhero', superheroeSchema, 'Grupo-19');

export default superHeroe;