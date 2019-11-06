import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CreditcarddropdownComponent } from './creditcarddropdown/creditcarddropdown.component';
import { CreditCartModule } from './creditcarddropdown/creditCard.Module';

@NgModule({
    declarations: [

    ],
    imports:[
        CommonModule,
        CreditCartModule
    ],
    exports: [
        CreditCartModule
    ],
    providers: []
})
export class ComponentesModule { }
