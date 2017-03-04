import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutes } from './faq.routes';
import { FaqComponent } from './components/faq.component';

@NgModule({
    imports: [
        CommonModule,
        FaqRoutes
    ],

    declarations: [
        FaqComponent
    ],

})

export class FaqModule { }