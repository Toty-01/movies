export class Movie {
  photo?: String
  synopsis: String | undefined

  constructor(public title: String, public director: String, public year: string) {}
}
