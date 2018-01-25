import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'team',
    templateUrl : 'team.component.html'
    
})
export class TeamComponent implements OnInit {

    public players : any ;
    address : string;
    rightIndex : number=10;
    constructor(private httpClient:HttpClient) { 
        // this.players = ['Akash','Aditya','Ajay','Aman','Sisodiya'];
        this.address = localStorage.getItem('address');
        this.httpClient.get(this.address+'/most_runs').toPromise().then(res => {
            this.players = res
            console.log(this.players);
        })
    }
  showMore(){
      this.rightIndex = this.rightIndex + 10;
  }
    ngOnInit() { 

    }

}