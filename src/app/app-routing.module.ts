import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent} from './pages/sign-up/sign-up.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

import { AngularFireAuthGuard,
          redirectUnauthorizedTo,
           redirectLoggedInTo} from '@angular/fire/auth-guard';
import { HomeComponent } from './pages/home/home.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['sign-in']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
 { path: 'sign-in',
 component: SignInComponent,
 canActivate: [AngularFireAuthGuard],
 data: {authGuardPipe: redirectLoggedInToHome }
 },
{
  path: 'sign-up',
  component: SignUpComponent
},

{
  path: 'home',
  component: HomeComponent,
  canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectUnauthorizedToLogin }
},
{
  path: '**',
  component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
