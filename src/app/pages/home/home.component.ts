import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public listCardCash;
public listCardMiles;
  constructor() {

    this.listCardCash = [
      {value: '46666666'},
      {value: '56666666'}
    ];

    this.listCardMiles = [
      { value: '47777777'},
      { value: '57777777'}
    ];
  }

  ngOnInit() {
  }


  /**
   * Metodo para capturar eventos de tarjetas Miles
   * @param $cardMile number of card
   */
  public selectCardMiles($cardMile: any) {
    console.log('Card del combo miles ', $cardMile);
  }

  /**
   * Método para capturar los eventos de tarjetas cash
   * @param $cardMile number of card
   */
  public selectCardCash($cardMile: any) {
    console.log('Card del combo miles ', $cardMile);
  }
}
