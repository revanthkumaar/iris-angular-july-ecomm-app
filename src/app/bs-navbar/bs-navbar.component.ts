import { Component, OnInit } from '@angular/core';
import {AngularFireAuthModule} from '@angular/fire'

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  user: firebase.User;

  constructor(private afAuth:AngularFireAuth) { 
    afAuth.authState.subscribe(user => this.user = user)
  }

  logout(){ 

    this.afAuth.auth.SignOut()
    //userlogout
  }
}


