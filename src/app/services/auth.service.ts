import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/compat/firestore';

import { User } from '../components/shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  userCollection!: AngularFirestoreCollection<User>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
    this.userCollection = this.firestore.collection<User>('users');
  }

  isAuthenticated() {
    return new Observable<boolean>((subscriber) => {
      this.firebaseAuth.authState.subscribe({
        next: (value) => {
          subscriber.next(Boolean(value));
        },
        error: () => subscriber.next(false),
      });
    });
  }

  getUserInfo() {
    return this.firebaseAuth.authState;
  }

  login(email: string, password: string) {
    return new Observable((subscriber) => {
      this.firebaseAuth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          subscriber.next();
        })
        .catch((error) => {
          subscriber.error(error.message);
        });
    });
  }

  signup(email: string, password: string) {
    return new Observable((subscriber) => {
      this.firebaseAuth
        .createUserWithEmailAndPassword(email, password)
        .then(() => void subscriber.next())
        .catch((error) => void subscriber.error(error.message));
    });
  }

  logout() {
    return new Observable((sub) => {
      this.firebaseAuth
        .signOut()
        .then(() => void sub.next())
        .catch(() => void sub.error());
    });
  }
}
