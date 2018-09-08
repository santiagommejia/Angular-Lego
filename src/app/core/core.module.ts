import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [ /* components, pipes and directives */ ],
  imports: [ /* module imports */ ],
  exports: [ /* components, pipes and directives */ ],
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
