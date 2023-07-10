import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HistoryComponent } from './components/history/history.component';

import { ProfileComponent } from './components/profile/profile.component';
import { Profile2Component } from './components/profile2/profile2.component';
import { Profile3Component } from './components/profile3/profile3.component';
import { Gallery2Component } from './components/gallery2/gallery2.component';
import { Gallery3Component } from './components/gallery3/gallery3.component';
import { RegistrationreportComponent } from './components/registrationreport/registrationreport.component';
import { PasswordrecoveryComponent } from './components/passwordrecovery/passwordrecovery.component';
import { PatientregistryComponent } from './components/patientregistry/patientregistry.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  {
    path: 'main',
    component: MainComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {path:'history',component: HistoryComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'gallery',component:GalleryComponent},
  {path:'gallery2',component:Gallery2Component},
  {path:'gallery3',component:Gallery3Component},
  {path:'profile',component:ProfileComponent},
  {path:'profile2',component:Profile2Component},
  {path:'profile3',component:Profile3Component},
  {path:'registrationreport',component:RegistrationreportComponent},
  {path:'passwordrecovery',component:PasswordrecoveryComponent},
  {path:'patientregistry',component:PatientregistryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
