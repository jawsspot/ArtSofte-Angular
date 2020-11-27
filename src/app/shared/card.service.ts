
import { Injectable } from '@angular/core';

export interface Card {
  id: number;
  senderNumber: string;
  validityCard: string;
  cvc: string;
  date: any;
  recipientNumber: string;
  transferAmount: string;
}


let loadState: any;

if (localStorage.getItem('historyItems') === null) {
  loadState = [];
  // записываем в localStorage пустой массив
  localStorage.setItem('historyItems', '[]');
} else {
  let historyItems: any = localStorage.getItem('historyItems');
  historyItems = JSON.parse(historyItems);
  const arr: string[] = [];
  loadState = historyItems.map((item: any) => {
    arr.push(item);
  });
  loadState = arr;
}

@Injectable({providedIn: 'root'})

export class CardService {
    public listTransist: Card[] = loadState;

    removeCard(id: Number) {
      this.listTransist = this.listTransist.filter(t => t.id !== id);
      let historyItems = JSON.stringify(this.listTransist);
      localStorage.setItem('historyItems', historyItems);
    }

    submit(card: Card) {
    this.listTransist.push(card);

    let historyItems: any  = localStorage.getItem('historyItems') ;
    historyItems = JSON.parse(historyItems);

    historyItems.push(card);
    const toLocalStor = JSON.stringify(historyItems);
    localStorage.setItem('historyItems', toLocalStor);
    }

    repeatTransist(el: Card){
      const repeatCard: any = JSON.stringify(el);
      localStorage.setItem('repeat', repeatCard);
    }
    clearStorage(){
      localStorage.removeItem('repeat');
    }
}
