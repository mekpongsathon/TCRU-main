import { PleaseCheckMailComponent } from './content/pleaseCheckMail/pleaseCheckMail.component';
import { ResetPasswordComponent } from './content/resetPassword/resetPassword.component';
import { ShopComponent } from './content/shop/shop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './content/login/login.component';
import { RegisterComponent } from './content/register/register.component';
import { ProfileComponent } from './content/profile/profile.component';
import { SigninComponent } from './content/signin/signin.component';


const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'shop', component: ShopComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'login/resetpassword', component: ResetPasswordComponent },
  { path: 'login/resetpassword/checkmail', component: PleaseCheckMailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
