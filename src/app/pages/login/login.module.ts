import { NgModule } from '@angular/core';

import { CoreModule } from "@core/core.module";
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
