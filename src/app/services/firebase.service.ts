import { Injectable } from '@angular/core';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

@Injectable()
export class FireBaseService {
  firebaseConfig = {
    apiKey: 'AIzaSyB_Dq287kl-HvapgNxbXWRrTUyjQy9dGZU',
    authDomain: 'recipe-angular-33811.firebaseapp.com',
    projectId: 'recipe-angular-33811',
    storageBucket: 'recipe-angular-33811.appspot.com',
    messagingSenderId: '839076005943',
    appId: '1:839076005943:web:55855539e85e8803d957b2',
    measurementId: 'G-76G5ZHS475',
  };

  constructor() {
    // Initialize Firebase
    // const app = initializeApp(this.firebaseConfig);
    // const analytics = getAnalytics(app);
  }
}
