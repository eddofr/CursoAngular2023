import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo : String;
  subtitulo : String;
  nro? : number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MiPrimerApp';
  public ArregloTarjetas : Tarjeta[]=[];

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo : "Video 1", subtitulo : "Subtitulo Video 1"},
      {titulo : "Video 2", subtitulo : "Subtitulo Video 2"},
      {titulo : "Video 3", subtitulo : "Subtitulo Video 3"},
    ]
  }

}
