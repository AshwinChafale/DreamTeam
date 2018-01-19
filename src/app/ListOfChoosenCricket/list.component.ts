import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'listComponent',
    templateUrl: 'list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    @Input()
    name: number;
    constructor() {

    }

    ngOnInit() {

    }

}