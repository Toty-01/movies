import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/movie.model';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import DataSnapshot = firebase.database.DataSnapshot


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies: Movie[] = [];
  movieSubject = new Subject<Movie[]>();

  constructor() {
    this.getMovies();
  }

  emitMovies() {
    this.movieSubject.next(this.movies);
  }

  saveMovies() {
    firebase.database().ref("/movies").set(this.movies);
  }

  getMovies() {
    firebase.database().ref("/movies")
      .on("value", (data: DataSnapshot) => {
        this.movies = data.val() ? data.val() : []
        this.emitMovies()
      })
  }

  getSingleMovie(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref("/movies/" + id).once("value").then(
          (data: DataSnapshot) => {
            resolve(data.val())
          }, (error) => {
            reject(error)
          }
        )
      }
    )
  }

  createNewMovie(newMovie: Movie) {
    this.movies.push(newMovie)
    this.saveMovies()
    this.emitMovies()
  }

  removeMovie(movie: Movie) {
    const movieIndexToRemove = this.movies.findIndex(
      (movieEl) => {
        if (movieEl === movie) {
          return true;
        } else {
          return undefined;
        }
      }
    )

    this.movies.splice(movieIndexToRemove, 1);
    this.saveMovies();
    this.emitMovies();
  }

}
