import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/service';


@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.sass']
})
export class HeroCardComponent implements OnInit {
  @Input () filterValue?: string;
  characters:any;
  show: boolean = false;
  dataComics: Array<any>=[];

  constructor(private data:DataService) {}

  ngOnInit() {
    //MOSTRAR TODOS LOS COMICS AL CARGAR LA PAGINA
    this.data.getCharacters().subscribe(resp=> {
      this.characters=resp.data.results;
    })

    //MOSTRAR TODOS LOS COMICS AL BUSCAR
    this.data.getComics$().subscribe((comics:any)=>{
      this.characters= comics;
    })
  }

  //FILTRO DE 4 COMICS RELACIONADOS CON EL PERSONAJE
  filterItems(items:Array<any>) {
    return items.filter((item, index:number) => index < 4)
  }

  //MOSTRAR MODAL DEL COMIC RELACIONADO AL PERSONAJE
  showModal(comic:any) {
    this.data.getComics(comic.resourceURI).subscribe(resp=> {
      this.dataComics = resp.data.results;
      this.show = true;
    });
  }

  //CERRAR MODAL DEL COMIC RELACIONADO AL PERSONAJE
  closeModal() {
    this.show = !this.show
  }

}
