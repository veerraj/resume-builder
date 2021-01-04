import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:  any;
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) {
    
   }

  async register({email,password}){
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    this.router.navigateByUrl('/login')
  }

  async login({email,password}){
    var result = await this.afAuth.signInWithEmailAndPassword(email,password);
    this.setUser();
    this.router.navigateByUrl('/home')
  }

  setUser(){
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }
}
