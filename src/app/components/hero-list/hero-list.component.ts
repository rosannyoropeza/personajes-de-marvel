import { DataService } from 'src/app/service/service';
import { Comics } from './../../comicsInterface';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.sass']
})
export class HeroListComponent implements OnInit {
  comics: Array<any>=[];

  constructor(public localStore: LocalStorageService, private data: DataService ) { }

  ngOnInit(): void {
    this.comics = this.localStore.getComicsLocalStorage();
  }

  //FUNCION PARA MOSTRAR DE FORMA ALEATORIA 3 COMICS DE LA LISTA DE PERSONAJES


  //FUNCION PARA ELIMINAR LOS COMICS DEL LOCALSTORAGE
  deleteComics(comic:Comics){
    if(confirm('Are you sure to delete this comic?')){
      this.localStore.deleteComics(comic);
    }
  }
}
