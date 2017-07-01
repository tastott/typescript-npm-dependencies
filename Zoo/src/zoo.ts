import { Animal, Bird } from "animals";

export class Zoo {
    constructor(private animals: Animal[] = []) {

    }

    public MakeNoise(): void {
        this.animals.forEach(animal => animal.MakeNoise());
    }

    public AddToAviary(bird: Bird): void {
        this.animals.push(bird);
    }
}