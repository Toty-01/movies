import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MovieFormComponent } from './movie-list/movie-form/movie-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SingleMovieComponent } from './movie-list/single-movie/single-movie.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'movies', canActivate: [AuthGuardService], component: MovieListComponent },
  { path: 'movies/new', canActivate: [AuthGuardService], component: MovieFormComponent },
  { path: 'movie/view/:id', canActivate: [AuthGuardService], component: SingleMovieComponent },
  { path: '', redirectTo: 'movies', pathMatch: "full" },
  { path: '**', redirectTo: 'movies' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
