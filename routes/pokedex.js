import express from "express";
import Pokedex from "../models/Pokedex.js";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const results = await Pokedex.find();
    return res.status(200).json(results);
  } catch (error) {
    console.log("error", error);
  }
});
// router.get("/name/:name", async (req, res) => {
//   try {
//     const results = await Pokedex.find({ name: req.params.name });
//     return res.status(200).json(results);
//   } catch (error) {
//       return res.status(404).json({message:error})
   
//   }
// });
router.get("/type/:type", async (req, res) => {
 
    try {
        const type= req.params.type
  const data = await Pokedex.find({ type: type.toLowerCase() });

  return res.send(data);
    } catch (error) {
        return res.status(404).json({ message: error });
    }

});
router.get("/name/:name", async (req, res) => {
  try {
      const name = req.params.name;
      console.log(name);
      
    const data = await Pokedex.find({ "name.english": name });

    return res.send(data);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

//bonus 
router.get("/name/:name/language", async (req, res) => {
    const language = req.query.language;
   
      try {
        const name = req.params.name;
        console.log(name);

        const data = await Pokedex.find({ [`name.${language.toLowerCase()}`]: name });

        return res.send(data);
      } catch (error) {
        return res.status(404).json({ message: error });
      }
    
 
});
export default router;
