import { Animal } from "../animal";

export abstract class Bird implements Animal {
    public Legs = 2;

    constructor(private birdCall: string) {

    }

    public MakeNoise(): void {
        console.log(`Flap!, ${this.birdCall}!`);
    }
}