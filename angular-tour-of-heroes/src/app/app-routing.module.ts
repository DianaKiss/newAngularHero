import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],

  imports: [
    RouterModule.forRoot(routes)
  ],

})
export class AppRoutingModule {

}
