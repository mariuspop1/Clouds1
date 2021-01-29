import { Injectable } from '@angular/core';
import  firebase  from 'firebase/app'; 
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './user.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private user: User;

  constructor(private afAuth: AngularFireAuth, 
    private router: Router, private firestore: AngularFirestore) { }

  async signInWithGoogle(){
    const credentials =await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.user= {
    uid: credentials.user.uid,
    displayName: credentials.user.displayName,
    email: credentials.user.email
    };
    localStorage.setItem("user", JSON.stringify(this.user));
    this.updateUserData();
    this.router.navigate(["expenses"]);
  }
  private updateUserData(){
    this.firestore.collection("users").doc(this.user.uid).set({
      uid: this.user.uid,
      displayName: this.user.displayName,
      email:this.user.email
    },{ merge: true});

  }
  getUser(){
    if(this.user == null && this.userSignedIn()){
      this.user = JSON.parse(localStorage.getItem("user"));
    }
    return this.user;
  }

  userSignedIn(): boolean{
   return JSON.parse(localStorage.getItem("user")) !=null;
  }
  signOut(){
    this.afAuth.signOut();
    localStorage.removeItem("user");
    this.user=null;
    this.router.navigate(["signin"]);
  }
}
