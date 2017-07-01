import {Animal, Lion, Goose} from "animals";
import {Zoo} from "zoo";

const animals = [ new Lion() ];
const zoo = new Zoo(animals);

const goose = new Goose();
zoo.AddToAviary(goose);

zoo.MakeNoise();