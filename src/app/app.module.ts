import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SingleMovieComponent } from './movie-list/single-movie/single-movie.component';
import { MovieFormComponent } from './movie-list/movie-form/movie-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AuthService } from './services/auth.service';
import { MoviesService } from './services/movies.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    SingleMovieComponent,
    MovieFormComponent,
    MovieListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  // AuthGuardService
  providers: [ AuthService, MoviesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
