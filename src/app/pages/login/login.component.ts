import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  wrongCredentials = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // this.hackLogin();
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    });
    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
  }

  onSubmit(form: any) {
    this.authService.signInWithUsernameAndPassword(form.username, form.password).then(success => {
      this.wrongCredentials = !success;
      success ? this.router.navigate(['welcome']) : null;
    });
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
