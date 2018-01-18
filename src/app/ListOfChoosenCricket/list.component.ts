import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'listComponent',
    templateUrl: 'list.component.html',
    styles : [`
      
    .animate:hover{
        transition: all 1s ease-in-out;
        transform: translateX(-20%);
     }
     .animateok{
         
         display : none;
     }
     li:hover .animateok{
        display : inline-block;
       
     }
      
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