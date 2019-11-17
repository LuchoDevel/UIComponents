import {Component, OnInit, Inject, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {CreditCardImagePipe} from './pipe/creditCardImage.pipe';
import {CreditUSerCardPipe} from './pipe/userCreditCard.pipe';


export interface ListCreditCard {
  value?: any;
  default?: boolean;
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
  @Input() cards: any;

  /**
   * Retorna el numero de tarjeta seleccionado
   */
  @Output() cardSelectedEvent = new EventEmitter<string>();

  /**
   * Variables referencia
   */
  @ViewChild('select', {static: false, read: ElementRef}) selectElement: ElementRef;
  @ViewChild('options', {static: false, read: ElementRef}) optionsElement: ElementRef;
  @ViewChild('contentSelect', {static: false, read: ElementRef}) contentSelectElement: ElementRef;

  /**
   * Variables para DoomHTML
   */
  private select: any;
  private opciones: any;
  private contenidoSelect: any;

  /**
   * Indica si se ha dado click al select
   */
  public isActiveSelect: boolean;

  /**
   *
   */
  public listCard: ListCreditCard[];

  /**
   * Icono de flecha a mostrar en el select
   */
  public arrowIcon: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cardImagenPipe: CreditCardImagePipe
  ) {

    this.isActiveSelect = false;
  }

  ngOnInit() {
    this.arrowIcon = 'assets/img/ico/down-arrow-icon.png';
    this.listCard = this.cards;
    this.initVar();
  }

  initVar() {
    this.select = this.document.querySelector('#select');
    this.opciones = this.document.querySelector('#opciones');
    this.contenidoSelect = this.document.querySelector('#select .contenido-select');
  }

  activeSelect() {
    this.isActiveSelect = !this.isActiveSelect;
    this.arrowIcon = (this.isActiveSelect) ? 'assets/img/ico/up-arrow-icon.png' : 'assets/img/ico/down-arrow-icon.png';
    this.selectElement.nativeElement.classList.toggle('active');
    // this.select.classList.toggle('active');
    this.optionsElement.nativeElement.classList.toggle('active');
    // this.opciones.classList.toggle('active');
  }

  selectOption(card, $e) {
    $e.preventDefault();
    this.contentSelectElement.nativeElement.innerHTML = $e.currentTarget.innerHTML;
    console.log('Card active ', card);
    this.cardSelectedEvent.emit(card);
  }

  selectIConCard(numberCard): string {
    const typeCard = this.cardImagenPipe.transform(numberCard);
    switch (typeCard) {
      case 'Mastercard':
        return 'assets/img/ico/card-master-ico.png';
      case 'Visa':
        return 'assets/img/ico/card-visa-ico.png';
    }
  }

}
