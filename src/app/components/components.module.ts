import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CreditcarddropdownComponent } from './creditcarddropdown/creditcarddropdown.component';
import { NeonButtonComponent } from './neon-button/neon-button.component';

@NgModule({
    declarations: [

        CreditcarddropdownComponent,

        NeonButtonComponent],
    imports: [
        CommonModule
    ],
    exports: [
        CreditcarddropdownComponent,
        NeonButtonComponent
    ],
    providers: []
})
export class ComponentesModule { }
