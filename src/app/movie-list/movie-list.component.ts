import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {

  movies?: Movie[];
  moviesSubscription?: Subscription;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.moviesSubscription = this.moviesService.movieSubject.subscribe(
      (movies: Movie[]) => {
        this.movies = movies
      }
    )
    this.moviesService.getMovies()
    this.moviesService.emitMovies()
  }

  onNewMovie() {
    this.router.navigate(['/movies', 'new'])
  }

  onDeleteMovie(movie: Movie) {
    this.moviesService.removeMovie(movie);
  }

  onViewMovie(id: number) {
    this.router.navigate(["/movie", "view", id])
  }

  ngOnDestroy(): void {
    this.moviesSubscription?.unsubscribe()
  }

}
