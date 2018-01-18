import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'listComponent',
    templateUrl: 'list.component.html',
    styles : [`
       
    `]
})
export class ListComponent implements OnInit {
    
      @Input()
      name : number;
    constructor() { 
        
    }

    ngOnInit() { 

    }

}