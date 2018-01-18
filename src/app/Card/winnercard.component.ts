import { Component, OnInit,Input } from '@angular/core';


@Component({
    selector: 'winnercard',
    templateUrl: 'winnercard.component.html',
    styles : [`
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:600,300);
 
    .center {
     
      height: 400px;
      width: 320px;
      background: #fff;
      border-radius: 3px;
      overflow: hidden;
      -webkit-box-shadow: 2px 2px 1px 0 rgba(0, 0, 0, 0.3);
              box-shadow: 2px 2px 1px 0 rgba(0, 0, 0, 0.3);
    }
    
    .profile {
      float: left;
      width: 200px;
      height: 320px;
      text-align: center;
    }
    .profile .image {
      position: relative;
      width: 70px;
      height: 70px;
      margin: 38px auto 0 auto;
    }
    .profile .image .circle-1, .profile .image .circle-2 {
      position: absolute;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      width: 76px;
      height: 76px;
      top: -3px;
      left: -3px;
      border-width: 1px;
      border-style: solid;
      border-color: #786450 #786450 #786450 transparent;
      border-radius: 50%;
      -webkit-transition: all 1.5s ease-in-out;
      transition: all 1.5s ease-in-out;
    }
    .profile .image .circle-2 {
      width: 82px;
      height: 82px;
      top: -6px;
      left: -6px;
      border-color: #786450 transparent #786450 #786450;
    }
    .profile .image img {
      display: block;
      border-radius: 50%;
      background: #F5E8DF;
    }
    .profile .image:hover {
      cursor: pointer;
    }
    .profile .image:hover .circle-1, .profile .image:hover .circle-2 {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
    .profile .image:hover .circle-2 {
      -webkit-transform: rotate(-360deg);
              transform: rotate(-360deg);
    }
    .profile .name {
      font-size: 15px;
      font-weight: 600;
      margin-top: 20px;
    }
    .profile .job {
      font-size: 11px;
      line-height: 15px;
    }
    .profile .actions {
      margin-top: 33px;
    }
    .profile .actions .btn {
      display: block;
      width: 120px;
      height: 30px;
      margin: 0 auto 10px auto;
      background: none;
      border: 1px solid #786450;
      border-radius: 15px;
      font-size: 12px;
      font-weight: 600;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      -webkit-transition: all .3s ease-in-out;
      transition: all .3s ease-in-out;
      color: #786450;
    }
    .profile .actions .btn:hover {
     
    }
    
    .stats {
      float: left;
    }
    .stats .box {
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      width: 120px;
      height: 133px;
      background: #BBDEFB;
      text-align: center;
      padding-top: 28px;
      -webkit-transition: all .4s ease-in-out;
      transition: all .4s ease-in-out;
    }
    .stats .box:hover {
      background: #E1CFC2;
      cursor: pointer;
    }
    .stats .box:nth-child(2) {
      margin: 1px 0;
    }
    .stats span {
      display: block;
    }
    .stats .value {
      font-size: 18px;
      font-weight: 600;
    }
    .stats .parameter {
      font-size: 11px;
    }
    
    `]
})
export class WinnerCardComponent implements OnInit {

   @Input()
   name:string;
   @Input()
   player : string;

   @Input()
   runs : string;

   @Input()
   wicket : string;

   @Input()
   average  : string;
    constructor() { }

    ngOnInit() { 

    }

}