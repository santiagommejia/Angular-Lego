import { NgModule } from '@angular/core';
import { AuthGuardService } from "@core/services/auth-guard.service";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'welcome', canActivate: [AuthGuardService], loadChildren: './pages/welcome/welcome.module#WelcomeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
