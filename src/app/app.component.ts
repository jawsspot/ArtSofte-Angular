import { CardService } from './shared/card.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private cardService: CardService) {}

  appTitle = 'Hello';

  clearStorage(){
    this.cardService.clearStorage();
  }
}
