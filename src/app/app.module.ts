// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { AirlinesModule } from './airlines/airlines.module';
// import { AppRoutingModule } from './app-routing.module';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCdyKTNtzSqeUWa1Bx8PBQin9_bS8L5Mls',
//   authDomain: 'demoangular123-1e91b.firebaseapp.com',
//   projectId: 'demoangular123-1e91b',
//   storageBucket: 'demoangular123-1e91b.appspot.com',
//   messagingSenderId: '401841641379',
//   appId: '1:401841641379:web:8b4e3815063bf8e7596c16',
// };

// @NgModule({
//   declarations: [AppComponent],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     AirlinesModule,
//     AngularFireModule.initializeApp(firebaseConfig),
//     AngularFirestoreModule,
//   ],
//   providers: [
//     provideFirebaseApp(() =>
//       initializeApp({
//         projectId: 'demoangular123-1e91b',
//         appId: '1:401841641379:web:8b4e3815063bf8e7596c16',
//         storageBucket: 'demoangular123-1e91b.appspot.com',
//         apiKey: 'AIzaSyCdyKTNtzSqeUWa1Bx8PBQin9_bS8L5Mls',
//         authDomain: 'demoangular123-1e91b.firebaseapp.com',
//         messagingSenderId: '401841641379',
//       })
//     ),
//     provideFirestore(() => getFirestore()),
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { AirlinesModule } from './airlines/airlines.module';
// import { AppRoutingModule } from './app-routing.module';
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, AirlinesModule, AppRoutingModule, FormsModule],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AirlinesModule } from './airlines/airlines.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCdyKTNtzSqeUWa1Bx8PBQin9_bS8L5Mls',
  authDomain: 'demoangular123-1e91b.firebaseapp.com',
  projectId: 'demoangular123-1e91b',
  storageBucket: 'demoangular123-1e91b.appspot.com',
  messagingSenderId: '401841641379',
  appId: '1:401841641379:web:8b4e3815063bf8e7596c16',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AirlinesModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
