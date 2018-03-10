import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './Player';
import { TeamService } from './team.service';

@Component({
    selector: 'team',
    templateUrl : 'team.component.html',
    styleUrls: ['./team.component.css'],
    providers :[TeamService]
    
})
export class TeamComponent implements OnInit {
    
    public players : any ;
    address : string;
    rightIndex : number=12;
    selectedPlayer : Array<number>;
    selectedP = [];
    teamService : TeamService;
    constructor(private httpClient:HttpClient,teamService:TeamService) { 
        // this.players = ['Akash','Aditya','Ajay','Aman','Sisodiya'];
        this.address = localStorage.getItem('address');
        this.teamService = teamService;
        this.httpClient.get(this.address+'/most_runs').toPromise().then(res => {
            this.players = res
            console.log(this.players);
        })
       
    }
  showMore(){
      this.rightIndex = this.rightIndex + 12;
  }
  select(player) : void{
    //  this.selectedPlayer.push({
    //      'id' : player.id,
    //      'batsman' : player.batsman,
    //      'balls_faced' : player.balls_faced,
    //      'sum' : player.sum
    //  });
    if(this.selectedP.length == 0){
        console.log("zero");
        this.selectedP.push(player);
    }
    console.log(this.selectedP.includes(player));
    if(this.selectedP.includes(player)){
        console.log('hai player');
    }
    else{
        console.log('nhi hai player');
        this.selectedP.push(player);
    }
    console.log(this.selectedP);
    
       this.teamService.setUser(this.selectedP);
 
  
    
   
    
  }
  delete(player){
    var a = this.selectedP.indexOf(player);
    this.selectedP.splice(a,1);
  }
    ngOnInit() { 

    }

}