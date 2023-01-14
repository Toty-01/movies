import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyAaySv01hg76ZEXkqfLR1RT6DOADsCKhsk",
      authDomain: "movies-4b5da.firebaseapp.com",
      projectId: "movies-4b5da",
      storageBucket: "movies-4b5da.appspot.com",
      messagingSenderId: "860451412750",
      appId: "1:860451412750:web:cec8560edb668791a3d55f"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
