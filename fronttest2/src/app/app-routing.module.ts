import { ShopComponent } from './content/shop/shop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './content/login/login.component';
import { RegisterComponent } from './content/register/register.component';
import { ProfileComponent } from './content/profile/profile.component';
import { SigninComponent } from './content/signin/signin.component';


const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
