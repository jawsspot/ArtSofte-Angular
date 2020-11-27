import { CardService } from './../shared/card.service';


import { Component, OnInit } from '@angular/core';



@Component ({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})




export class CardComponent implements OnInit {
  constructor(public cardService: CardService){}
    ngOnInit () {}


    removeCard(id: number){
      this.cardService.removeCard(id);
    }
    repeatTransist(el: any){
      this.cardService.repeatTransist(el);
    }
}