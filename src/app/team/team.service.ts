import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {
    selectedP = []
    setUser(players){
        this.selectedP = players;
      
        console.log(this.selectedP);
    }
    getUser() : any{
        console.log("sdsd");
        return this.selectedP;
    }
}