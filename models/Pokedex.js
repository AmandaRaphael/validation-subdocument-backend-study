import mongoose from "mongoose";

//method 2-nested subdocuments
const subSchema = mongoose.Schema({
  english: { type: String, required: true, minLength: 3, maxLength: 24 },
  japanese: { type: String, minLength: 3, maxLength: 24 },
  chinese: { type: String, minLength: 3, maxLength: 24 },
  french: { type: String, minLength: 3, maxLength: 24 },
});

const pokedexSchema = mongoose.Schema({
  name:subSchema,
  type:{type: [String],required:true, enum:['grass',    'poison',
'fire',     'flying',
'water',    'bug',
'normal',   'electric',
'ground',   'fairy',
'fighting', 'psychic',
'rock',     'steel',
'ice',      'ghost',
'dragon',   'dark']},
  base: {
    HP: { type: Number , min:10, default:20},
    Attack: { type: Number, min:1, default:5 },
    Defense: { type: Number , min:1, default:1},
    Speed: { type: Number , min:20, default:5},
  },
});

/*
In the following line, the 3rd argument with the string "pokedex"
forces MongoDB to use the name "pokedex" for the collection
 */
const Pokedex = mongoose.model("pokedex", pokedexSchema, "pokedex");

export default Pokedex;
