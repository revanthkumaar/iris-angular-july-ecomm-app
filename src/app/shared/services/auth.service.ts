import { Injectable, NgZone } from '@angular/core';
import {Router} from "@angular/router/"
import auth from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth';
import {User}  from './user.ts';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone) 
  ) {

    this.afAuth.authState.subscribe(user => {
      if(user){

      }
      else{

      }
    })

  }

  SignIn(email,password){

      this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then((result) => {
        this.ngZone.run(()=> {
          this.router.navigate(['products'])
        })
      })
      .catch((error)  => {
          console.log(error)
      })

  }

  SignOut(){
    

  }


}
