// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'userprofile', component: UserProfileComponent },
  { path: '', redirectTo: '/userprofile', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
