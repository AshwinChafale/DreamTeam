export class Player {
    id: string;
    batsman: string;
    balls_faced: number;  
    sum: number;    
    constructor(id: string, batsman: string, balls_faced: number, sum: number) {
        this.id = id;
        this.batsman = batsman;
        this.balls_faced = balls_faced;
        this.sum = sum;
    }
} 