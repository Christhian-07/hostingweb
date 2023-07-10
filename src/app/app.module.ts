import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



import { GalleryComponent } from './components/gallery/gallery.component';
import { HistoryComponent } from './components/history/history.component';
import { ProfileComponent } from './components/profile/profile.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { Profile2Component } from './components/profile2/profile2.component';
import { Profile3Component } from './components/profile3/profile3.component';
import { Gallery2Component } from './components/gallery2/gallery2.component';
import { Gallery3Component } from './components/gallery3/gallery3.component';
import { RegistrationreportComponent } from './components/registrationreport/registrationreport.component';
import { PasswordrecoveryComponent } from './components/passwordrecovery/passwordrecovery.component';
import { PatientregistryComponent } from './components/patientregistry/patientregistry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    GalleryComponent,
    HistoryComponent,
    ProfileComponent,
    Profile2Component,
    Profile3Component,
    Gallery2Component,
    Gallery3Component,
    RegistrationreportComponent,
    PasswordrecoveryComponent,
    PatientregistryComponent 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    FormsModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

