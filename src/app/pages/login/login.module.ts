import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { MaterialDesignModule } from '@material/material-design.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LoginRoutingModule,
    CoreModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
