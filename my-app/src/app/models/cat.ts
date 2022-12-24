export class Cat {
    public moral = 50;
    public poids = 3;

    public addToMoral(value: number){
        this.moral += value;
    }
    public addWeight(value: number){
        this.poids += value;
    }
}