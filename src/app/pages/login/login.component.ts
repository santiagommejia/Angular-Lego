import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "@core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    // this.hackLogin();
  }

  onSubmit(event: any) {
    console.log('submit clicked!: ',event);
    
  }

  hackLogin() {
    setTimeout(() => {
      this.authService.signInWithUsernameAndPassword('Houdini', 'bestmagician').then(() => {
        this.authService.isLoggedIn() ?
          this.router.navigate(['welcome']) :
          this.showIncorrectCredentials();
      });
    }, 2000);
  }

  showIncorrectCredentials() {
    console.error('incorrect credentials');
  }

  ngOnInit() {
  }

}
