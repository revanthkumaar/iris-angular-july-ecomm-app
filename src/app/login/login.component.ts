import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private authProvider : any;
  constructor(private afAuth: AngularFireAuth) { 

  }

  loginOnClick(){
    this.authProvider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithRedirect(this.)

  }

  loginWithCreds(email:string,password:string){
    /*  this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email,password)
      .then(res => {
        console.log('logged in');
      })
      .catch(err => {
          console.log('something went wrong')
      })

  }*/
}
}
