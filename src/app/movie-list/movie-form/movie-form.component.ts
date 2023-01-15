import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})

export class MovieFormComponent implements OnInit{

  movieForm: FormGroup | any

  constructor(private formBuilder: FormBuilder, private moviesServices: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      year: ['', Validators.required],
      synopsis: ""
    })
  }

  onSaveMovie() {
    const title = this.movieForm?.get('title')?.value
    const director = this.movieForm?.get('director')?.value
    const synopsis = this.movieForm?.get('synopsis')?.value
    const year = this.movieForm?.get('year')?.value

    const newMovie = new Movie(title, director, year)
    newMovie.synopsis = synopsis
    this.moviesServices.createNewMovie(newMovie)
    this.router.navigate(['/movies'])
  }

}
