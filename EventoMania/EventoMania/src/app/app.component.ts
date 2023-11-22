import { Component, OnInit } from '@angular/core';
import { Evento } from './models/evento.model';
import data from '../assets/data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  eventos: Evento[] = [];

  fechaactual: Date;

  uniquedirectios: string[] =[];

  selecteddirections: string ='';

  filtrateddirections: Evento[] =[];

  ngOnInit() {
    // Cargamos el fichero JSON
    const json: any = data;
    this.filtrateddirections;

    // Guardamos el fichero cargado en el array de Eventos
    this.eventos = json;

    // Convertimos las fechas a tipo Date
    this.eventos.map((value) => value.fecha = new Date(value.fecha));

    this.fechaactual = new Date();
  }
proximosEventos(): Evento[]{
  return this.eventos.filter(Evento => Evento.fecha >= this.fechaactual);
}

Eventospasados(): Evento[]{
  return this.eventos.filter(Evento => Evento.fecha <= this.fechaactual);
}
 }
