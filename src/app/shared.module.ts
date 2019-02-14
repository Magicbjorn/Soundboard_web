import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './track-trace/login/login.component';

import { ConsumerHeaderComponent } from './consumer-header/consumer-header.component';
import { ConsumerFooterComponent } from './consumer-footer/consumer-footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
    	CommonModule
    ],
    declarations: [
    	ConsumerHeaderComponent,
        ConsumerFooterComponent,
        PageNotFoundComponent,
        LoginComponent
    ],
    exports: [
        CommonModule,
        ConsumerHeaderComponent,
        ConsumerFooterComponent,
        PageNotFoundComponent,
        LoginComponent
    ]
})
  
export class SharedModule {}