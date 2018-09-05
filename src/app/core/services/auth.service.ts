import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

  private readonly hardUsername = 'Houdini';
  private readonly hardPassword = 'bestmagician';
  private loggedIn: boolean = false;

  constructor() {
    console.log('Constructor AuthService');
  }

  signInWithUsernameAndPassword(username: string, password: string): Promise<any> {
    return new Promise<any>(resolve => {
      this.loggedIn = (username === this.hardUsername && password === this.hardPassword);
      resolve();
    });
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout() {
    this.loggedIn = false;
  }

}