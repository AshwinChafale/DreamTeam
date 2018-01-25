import { Component, OnInit,Input } from '@angular/core';


@Component({
    selector: 'player',
    templateUrl: 'player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

 
    @Input()
    batsman : String;

    @Input()
    runsMade : number;


    @Input()
    ballFaced : number;
    
    strikeRate: number;
    source:any ;
    constructor() { 
        this.batsman = "Player Name";
        this.runsMade = 1000;
    
       
        this.source="https://img.etimg.com/thumb/msid-61166425,width-672,resizemode-4,imgsize-126503/news/sports/why-after-13-years-mahendra-singh-dhoni-is-still-not-out.jpg";
    }

    ngOnInit() {  }

}