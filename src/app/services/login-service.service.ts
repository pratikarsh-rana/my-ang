import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  setToken(token: string) {
    localStorage.setItem("myToken", token);
  };

  getToken() {
    return localStorage.getItem("myToken");
  };

  removeToken() {
    localStorage.removeItem("myToken");
  }

  getDecoded() {
    let token: any = this.getToken();
    if (!token) return null;

    if (token) {
      return JSON.parse(token);
    }
    return null;
  };

  isTokenValid(): boolean {
    const currentUser = this.getDecoded();
    if (currentUser && currentUser.expiryTime && currentUser.rememberMe) {
      const expiryTime = new Date(currentUser.expiryTime).getTime();
      const currentTime = new Date().getTime();
      return currentTime < expiryTime;
    }
    return false;
  }

}
