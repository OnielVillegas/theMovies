import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoComponent } from './info/info.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  movies: any;
  page: number = 0;

  constructor(private api: ApiService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.page++;
    this.api.getMovies(this.page).subscribe(
      (data: any) => this.movies = data.results,
      err => console.log(err)
    );
  }

  openDialog(movie: any) {

    let dialogRef = this.dialog.open(InfoComponent, {
      data: { Titulo: movie.title, Imagen: movie.poster_path, Descripcion: movie.overview, annio: movie.release_date},
    });

    dialogRef.afterClosed().subscribe(() => {});
  }
  
}