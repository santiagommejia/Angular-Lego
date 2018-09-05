import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [
    // components and directives
  ],
  imports: [
    // necessary modules
  ],
  exports: [
    // components and directives
  ],
})
export class CoreModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthGuardService,
        AuthService
      ]
    }
  }
}
