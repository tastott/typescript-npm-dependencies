import { Animal } from "./animal";

export class Lion implements Animal {
    public Legs = 4;

    public MakeNoise(): void {
        console.log("roar!");
    }
}