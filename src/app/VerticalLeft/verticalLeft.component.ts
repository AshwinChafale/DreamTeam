import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../ListOfChoosenCricket/list.component';

@Component({
    selector: 'verticalLeft',
    templateUrl: 'verticalLeft.component.html',
    providers :[]
})
export class VerticalLeftComponent implements OnInit {
    public counterValue: number;
    public players : any ;
    constructor() { 
        this.players = ['Sachin Tendulkar','Yuvraj Singh','Virat Kholi','MS Dhoni','Djdolls'];
    }

    ngOnInit() { 

    }

}