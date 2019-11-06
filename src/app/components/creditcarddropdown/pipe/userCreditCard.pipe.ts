import { Pipe, PipeTransform } from "@angular/core";


@Pipe({name: 'creditCardUserPipe'})
export class CreditUSerCardPipe implements PipeTransform {

    private icon = '****';
    transform(numberCard: string) {
        const newNumberCard = numberCard.slice(-4);
        return `${this.icon}${newNumberCard}`;
    }

}