import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'team',
    templateUrl : 'team.component.html'
    
})
export class TeamComponent implements OnInit {

    public players : any ;
    constructor() { 
        this.players = ['Akash','Aditya','Ajay','Aman','Sisodiya'];
    }

    ngOnInit() { 

    }

}