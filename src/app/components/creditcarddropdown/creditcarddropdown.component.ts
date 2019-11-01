import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface ListCreditCard {
  imagen: string;
  titulo?: string;
  descripcion: string;
  valor?: any;
}

@Component({
  selector: 'app-creditcarddropdown',
  templateUrl: './creditcarddropdown.component.html',
  styleUrls: ['./creditcarddropdown.component.scss']
})
export class CreditcarddropdownComponent implements OnInit {

  private select: any;
  private opciones: any;
  private contenidoSelect: any;

  public isActiveSelect:boolean;
  public listCard:ListCreditCard[];
  public arrowIcon:string;

  constructor(@Inject(DOCUMENT) private document: Document) {

    this.isActiveSelect = false;

    this.listCard = [
      {descripcion: '**** 4512', imagen: 'assets/img/ico/card-master-ico.png', valor: '**** 4512'},
      {descripcion: '**** 666', imagen: 'assets/img/ico/card-visa-ico.png', valor: '**** 666'}

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
    console.log(card);
  }
}
