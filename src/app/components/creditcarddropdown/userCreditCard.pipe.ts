import { Pipe, PipeTransform } from "@angular/core";


@Pipe({name: 'creditCardUserPipe'})
export class CreditUSerCardPipe implements PipeTransform {

    private icon = '****';
    transform(value: any) {
        
    }

}