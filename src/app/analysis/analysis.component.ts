import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { SPlayer } from './selected';
@Component({
    selector: 'app-analysis',
    templateUrl: './analysis.component.html',
    styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
    selectedP : any = [];
    ids:any = [];
    players: SPlayer ;
    fscore: any;
    constructor(private router: ActivatedRoute) {
        this.selectedP =  localStorage.getItem("lastname");
        console.log("***********************************************");
        console.log(JSON.parse(this.selectedP));
        for(let result of JSON.parse(this.selectedP)){
         
           this.players= new SPlayer(result.batsman,result.prediction);
           this.ids.push(this.players);
        }
        console.log(this.ids);
        localStorage.setItem("analysis",JSON.stringify(this.ids));
        this.fscore = localStorage.getItem("winscore");
        var myVar;
        
        function myFunction() {
            myVar = setTimeout(showPage, 3000);
            // alert('funbod');
        }
        
        function showPage() {
          document.getElementById("ascore").style.display = "none";
          console.log(document.getElementById("ascore"));
          console.log(document.getElementById("bscore"));
          document.getElementById("bscore").style.display = "block";
        //   alert('showfunbod');
        }
        myFunction();
     }

    ngOnInit() { 
      
     }
}