import { Component, OnInit} from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  products = [];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.getPosts().subscribe((data: any) => {
      console.log('data', data);
      this.products = data;
    });
  }
}


/*

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB-1Ya5esMT_xxGg3sfGdj8uiJpTOERwvo",
    authDomain: "ecomm-iris-angular.firebaseapp.com",
    projectId: "ecomm-iris-angular",
    storageBucket: "ecomm-iris-angular.appspot.com",
    messagingSenderId: "216869102520",
    appId: "1:216869102520:web:f9487a7fd94a20b845654d",
    measurementId: "G-BZ4VH2D167"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

*/
