import { Pipe, PipeTransform } from "@angular/core";
/**
 * Pipe retonar el tipo de tarjeta segun el numero de la misma
 */
@Pipe({name: 'creditCardImagePipe'})
export class CreditCardImage implements PipeTransform {

    private icon: string;

    transform(card: string): any {
         const index = card.slice(0,1);
        switch(index) {
            case '4':
                return 'Mastercard';
            case '5':
                return 'Visa';
        }
    }
}