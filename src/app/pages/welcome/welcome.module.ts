import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome.routing';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    WelcomeRoutingModule
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class WelcomeModule { }
