import { Component } from '@angular/core';
import { Photo } from './Basilio(B & Econ Directivas Estructurales)/photo.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
]})
export class AppComponent {
  photos: Photo[] = [
    new Photo('asset/estudio-profesional.jpg'),
    new Photo('asset/home-estudio.jpg'),
    new Photo('asset/microfono-de-estudio-cardioide.jpg'),
    new Photo('asset/microfono1.jpg.jpg'),
  ];
}
