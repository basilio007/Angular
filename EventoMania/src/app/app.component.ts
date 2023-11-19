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

  ngOnInit() {
    // Cargamos el fichero JSON
    const json: any = data;

    // Guardamos el fichero cargado en el array de Eventos
    this.eventos = json;

    // Convertimos las fechas a tipo Date
    this.eventos.map((value) => value.fecha = new Date(value.fecha));
  }

 }
