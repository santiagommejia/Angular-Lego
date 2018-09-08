import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

  private readonly hardUsername = 'mrrobot';
  private readonly hardPassword = 'fsociety';
  private loggedIn: boolean = false;

  constructor() {
    console.log('Constructor AuthService');
  }

  signInWithUsernameAndPassword(username: string, password: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.loggedIn = (username === this.hardUsername && password === this.hardPassword);
      resolve(this.loggedIn);
    });
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout() {
    this.loggedIn = false;
  }

}