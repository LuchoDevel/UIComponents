import { NgModule } from "@angular/core";
import { CreditcarddropdownComponent } from './creditcarddropdown.component';
import { CommonModule } from '@angular/common';
import { CreditUSerCardPipe } from './pipe/userCreditCard.pipe';
import { CreditCardImagePipe } from './pipe/creditCardImage.pipe';

@NgModule({
    declarations: [
        CreditcarddropdownComponent,
        CreditUSerCardPipe,
        CreditCardImagePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CreditcarddropdownComponent
    ],
    providers: [
        CreditUSerCardPipe,
        CreditCardImagePipe
    ]
})
export class CreditCartModule { }