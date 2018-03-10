import { Component, OnInit, Input } from '@angular/core';
import { ListComponent } from '../ListOfChoosenCricket/list.component';
import { TeamService } from '../team/team.service';

@Component({
    selector: 'verticalLeft',
    templateUrl: 'verticalLeft.component.html',
    providers :[TeamService]
})
export class VerticalLeftComponent implements OnInit {
    public counterValue: number;
    public players : any ;
    teamService : TeamService;
    @Input()
    selectPlayer = [];
    constructor(teamService : TeamService) { 
        this.teamService = teamService;
        console.log('dfdfsasas');
       
    }

    ngOnInit() { 
        
    }

}