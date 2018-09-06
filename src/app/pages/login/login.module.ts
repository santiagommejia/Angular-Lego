import { NgModule } from '@angular/core';

import { CoreModule } from "@core/core.module";
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { MaterialDesignModule } from "@material/material-design.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    CoreModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
