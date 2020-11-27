import { Card, CardService } from './../shared/card.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit  {
  form!: FormGroup;
  constructor(private cardService: CardService ) {
  }
  ngOnInit() {
    this.form = new FormGroup({
      senderNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(19),
        Validators.pattern('[0-9]{13,19}'),
      ]),
      validityCard: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{4}'),
      ]),
      cvc: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(4),
        Validators.pattern('[0-9]{3,4}'),
      ]),
      recipientNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(19),
        Validators.pattern('[0-9]{13,19}'),
      ]),
      transferAmount: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{1,10}'),
      ]),
    });
    
    let repeat: any = localStorage.getItem('repeat');
    repeat = JSON.parse(repeat);
    if (repeat !== null){
      this.form.setValue(
        { senderNumber: repeat.senderNumber,
          validityCard: repeat.validityCard,
          cvc: repeat.cvc,
          recipientNumber: repeat.recipientNumber,
          transferAmount: repeat.transferAmount
        }
      );
    }
  }

  submit(){
    let {senderNumber, validityCard, cvc, recipientNumber, transferAmount} = this.form.value;

    const card: Card = {
      senderNumber: senderNumber,
      validityCard: validityCard,
      cvc: cvc,
      recipientNumber: recipientNumber,
      transferAmount: transferAmount,
      id: Date.now(),
      date: new Date(),
    };

    this.form.setValue(
        { senderNumber: '',
          validityCard: '',
          cvc: '',
          recipientNumber: '',
          transferAmount: ''
        }
      );

    this.cardService.submit(card);
  }
}
