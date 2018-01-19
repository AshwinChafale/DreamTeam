import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'carousel',
    templateUrl: 'carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
    matches : any;
    constructor() {
        this.matches = [1,2,3];

     }

    ngOnInit() { 

    }

}