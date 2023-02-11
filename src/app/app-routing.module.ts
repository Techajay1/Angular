import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  {path:'',component:SignInComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'signin',component:SignInComponent},
  {path:'register',component:RegisterComponent},
  {path:'product',component:CartPageComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
