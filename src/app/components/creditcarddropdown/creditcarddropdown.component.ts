import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CreditCardImagePipe } from './pipe/creditCardImage.pipe';
import { CreditUSerCardPipe } from './pipe/userCreditCard.pipe';

export interface ListCreditCard {
  value?: any;
}

@Component({
  selector: 'app-creditcarddropdown',
  templateUrl: './creditcarddropdown.component.html',
  styleUrls: ['./creditcarddropdown.component.scss'],
  providers: [CreditUSerCardPipe]
})
export class CreditcarddropdownComponent implements OnInit {

  /**
   * Lista de tarjetas a mostrar en el select
   */
  @Input() listCards: string[];

  /**
   * Retorna el numero de tarjeta seleccionado
   */
  @Output() cardSelectedEvent =  new EventEmitter<string>();


  /**
   * Variables para DoomHTML
   */
  private select: any;
  private opciones: any;
  private contenidoSelect: any;

  /**
   * Indica si se ha dado click al select
   */
  public isActiveSelect:boolean;

  /**
   * 
   */
  public listCard:ListCreditCard[];

  /**
   * Icono de flecha a mostrar en el select
   */
  public arrowIcon:string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
  
    private cardImagenPipe: CreditCardImagePipe
    ) {



    this.isActiveSelect = false;
     
    

    this.listCard = [
      { value: '45128787'},
      { value: '56678978'}

    ]
  }

  ngOnInit() {
    this.arrowIcon = 'assets/img/ico/down-arrow-icon.png';

    this.initVar();
  }

  initVar() {
    this.select = this.document.querySelector('#select');
    this.opciones = this.document.querySelector('#opciones');
    this.contenidoSelect  = this.document.querySelector('#select .contenido-select');
  }

  activeSelect(){
    this.isActiveSelect = !this.isActiveSelect;
    this.arrowIcon = ( this.isActiveSelect) ? 'assets/img/ico/up-arrow-icon.png' : 'assets/img/ico/down-arrow-icon.png';
    this.select.classList.toggle('active');
    this.opciones.classList.toggle('active');
    
  }

  selectOption(card, $e){
    $e.preventDefault();
    this.contenidoSelect.innerHTML = $e.currentTarget.innerHTML;
    // console.log($e.currentTarget.innerHTML);
    this.cardSelectedEvent.emit(card);
  }

  selectIConCard(numberCard): string{
    const typeCard =  this.cardImagenPipe.transform(numberCard);

    switch (typeCard) {
      case 'Mastercard':
        return 'assets/img/ico/card-master-ico.png';
      case 'Visa':
          return 'assets/img/ico/card-visa-ico.png';
    }
  }

}
