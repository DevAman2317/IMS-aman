import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UnlockComponent } from './pages/unlock/unlock.component';

const routes: Routes = [
  {
    path:'' , component:LoginComponent,
  },
  {
    path:'login' , component:LoginComponent,
  },
  {
    path:'signup' , component:SignupComponent
  },
  {
    path:'unlock' , component:UnlockComponent
  },
  {
    path:'unlockAcc' , component:UnlockComponent
  },
  {
    path:'forgotpwd' , component:ForgotPasswordComponent
  },
  {
    path:'home' , component:HomeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
