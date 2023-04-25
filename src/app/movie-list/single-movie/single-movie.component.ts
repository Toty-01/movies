import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  movie: Movie | any

  constructor(private route: ActivatedRoute, private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.movie = new Movie('', '', '');
    const id = this.route.snapshot.params['id']
    this.moviesService.getSingleMovie(+id).then(
      (movie: Movie | any) => {
        this.movie = movie
      }
    )
  }

  onBack() {
    this.router.navigate(['/movies'])
  }

}
