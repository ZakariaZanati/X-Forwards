import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { AuthGuard } from './auth/auth.guard';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { UserDetailsComponent } from './auth/user-details/user-details.component';
import { ProfileComponent } from './profile/profile.component';
import {ViewGroupComponent} from './groups/view-group/view-group.component';
import {ListGroupComponent} from './groups/list-group/list-group.component';

const routes: Routes = [
  {path : '',component : HomeComponent},
  {path : 'sign-up',component : SignupComponent},
  {path : 'login',component : LoginComponent},
  {path : 'newsfeed',component : NewsfeedComponent,canActivate:[AuthGuard]},
  {path : 'profile',component : UserProfileComponent,canActivate:[AuthGuard]},
  {path : 'profile/:name',component : ProfileComponent,canActivate:[AuthGuard]},
  {path : 'userdetails',component : UserDetailsComponent,canActivate:[AuthGuard]},
  {path : 'group',component : ViewGroupComponent},
  {path : 'groups',component : ListGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
