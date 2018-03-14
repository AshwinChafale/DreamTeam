import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './Player';
import { TeamService } from './team.service';
import {Router} from '@angular/router'

@Component({
    selector: 'team',
    templateUrl: 'team.component.html',
    styleUrls: ['./team.component.css'],
    providers: [TeamService]

})
export class TeamComponent implements OnInit {

    public players: any;
    address: string;
    fscore: number;
    rightIndex: number = 12;
    balance: number = 50;
    totalValue: number = 0;
    selectedPlayer: Array<number>;
    selectedP = [];
    perdict: number = 0;
    bowler : any;
    maxBatsman : number=0;
    maxBowler : number=0;
    teamService: TeamService; maxiumParamterSelectedAs: any = 8500.568;
    constructor(private httpClient: HttpClient, teamService: TeamService,private router: Router) {
        // this.players = ['Akash','Aditya','Ajay','Aman','Sisodiya'];
        this.address = localStorage.getItem('address');
        this.teamService = teamService;
        this.httpClient.get(this.address + '/predicted').toPromise().then(res => {
            this.players = res
            console.log(this.players);
        });
        this.httpClient.get(this.address + '/bowler').toPromise().then(res => {
            this.bowler = res
            console.log(this.bowler);
        });

    }

    showMore() {
        console.log("clicked");
        this.rightIndex = this.rightIndex + 12;
    }
    select(player): void {
        //  this.selectedPlayer.push({
        //      'id' : player.id,
        //      'batsman' : player.batsman,
        //      'balls_faced' : player.balls_faced,
        //      'sum' : player.sum
        //  });
        
        if (this.selectedP.length == 0) {
            this.totalValue = this.totalValue + player.cost;
            this.maxBatsman = this.maxBatsman + 1;
            console.log(this.totalValue);
            this.selectedP.push(player);
            console.log(this.selectedP);
        }
        console.log(this.selectedP.includes(player));
        if (this.selectedP.includes(player)) {
            console.log('hai player');
        }
        else {
            console.log('nhi hai player');
            if (this.selectedP.length > 10) {
                alert("Cannot add more player");
            }
            else {
                this.totalValue = this.totalValue + player.cost;
                if (this.totalValue > 50) {
                    alert("Wallet exhausted please add other sequence");
                    this.totalValue = this.totalValue - player.cost;
                }
                else {
                    if(this.maxBatsman<6){
                     
                        this.maxBatsman = this.maxBatsman + 1;
                    console.log(this.totalValue);
                    this.selectedP.push(player);
                    }
                    else{
                        alert("Cannot add more than 6");
                    }
                }
            }
        }
        console.log(this.selectedP);

        this.teamService.setUser(this.selectedP);

        console.log(this.maxBatsman );



    }
    selectBowler(player): void {
        //  this.selectedPlayer.push({
        //      'id' : player.id,
        //      'batsman' : player.batsman,
        //      'balls_faced' : player.balls_faced,
        //      'sum' : player.sum
        //  });
      
        if (this.selectedP.length == 0) {
            this.maxBowler = this.maxBowler + 1;
            
           this.totalValue = this.totalValue + player.cost;
            console.log(this.totalValue);
            this.selectedP.push(player);
            console.log(this.selectedP);
         
        }
        console.log(this.selectedP.includes(player));
        if (this.selectedP.includes(player)) {
            console.log('hai player');
        }
        else {
            console.log('nhi hai player');
            if (this.selectedP.length > 10) {
                alert("Cannot add more player");
            }
            else {
                this.totalValue = this.totalValue + player.cost;
                if (this.totalValue > 50) {
                    alert("Wallet exhausted please add other sequence");
                    this.totalValue = this.totalValue - player.cost;
                }
                else {
                    if(this.maxBowler<6){
                        
                        this.maxBowler = this.maxBowler + 1;
                      //  alert(this.maxBowler);
                    console.log("bowler"+this.maxBowler);
                    this.selectedP.push(player);
                    console.log(this.maxBowler);
                    }
                    else{
                        alert('Cannot add more than 6 bowler');
                       
                    }
                }
            }
        }
        console.log(this.selectedP);

        this.teamService.setUser(this.selectedP);

       



    }
    delete(player) {
       
        if(player.oldparm){
           this.maxBowler = this.maxBowler - 1;
        }
        else{
            this.maxBatsman = this.maxBatsman -1;
        }

        console.log(this.maxBatsman + "  " + this.maxBowler);
       
        this.totalValue = this.totalValue - player.cost;
        console.log(this.totalValue);
        var a = this.selectedP.indexOf(player);
        this.selectedP.splice(a, 1);
    }
    calculate() {
        this.perdict = 0;
        if (this.selectedP.length < 11) {
            console.log(this.selectedP.length);
            alert("Add " + (11-this.selectedP.length) + " more Players!");
        } else {
            console.log(this.selectedP.length);
            this.selectedP.map((i, j) => {
                this.perdict = this.perdict + i.prediction;
                console.log(this.perdict);
            });
            this.fscore = (this.perdict / this.maxiumParamterSelectedAs) * 100;
            console.log((this.perdict / this.maxiumParamterSelectedAs) * 100);
            console.log(this.fscore);
            // var ans = this.fscore;
            // document.getElementById('fscore').innerText ='lol' + ans ;
            document.getElementById('fscore').style.display = 'block';
            var ans = this.fscore.toFixed(2);
            console.log(ans + "lol");
            this.fscore = Number.parseFloat(ans);
            localStorage.setItem("lastname",JSON.stringify(this.selectedP));
            localStorage.setItem("winscore",this.fscore.toString());
            this.router.navigate(['./analysis']);
            
        }
    }
    autocomplete(event) {
        console.log(event.target.value)
        var result = this.players.filter(function (value) {
            return (value.batsman.toLowerCase().includes(event.target.value.toLowerCase()))
        });
        console.log(result);
        this.players = result

    }
    autocompleteforbowler(event) {
        console.log(event.target.value)
        var result = this.bowler.filter(function (value) {
            return (value.batsman.toLowerCase().includes(event.target.value.toLowerCase()))
        });
        console.log(result);
        this.bowler = result

    }
    ngOnInit() {

    }

}