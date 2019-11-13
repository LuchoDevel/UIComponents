import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public listCard;
  constructor() { 
    
    this.listCard = [
      { value: '45128787'},
      { value: '56678978'}

    ]
  }

  ngOnInit() {
  }


  selectCard($event){
    console.log('Evento que llega al padre ', $event);
  }
}
