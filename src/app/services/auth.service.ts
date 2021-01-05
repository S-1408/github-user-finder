import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  // tslint:disable-next-line:typedef
  signUp(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

   // tslint:disable-next-line:typedef
   signIn(email: string , password: string){
     return this.auth.signInWithEmailAndPassword(email, password);
   }

   // tslint:disable-next-line:typedef
   getUser(){
     return this.auth.authState;
   }

   // tslint:disable-next-line:typedef
   signOut(){
     return this.auth.signOut;
   }
}
