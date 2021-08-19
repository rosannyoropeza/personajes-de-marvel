import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { DataService } from 'src/app/service/service';

@Component({
  selector: 'app-hero-modal',
  templateUrl: './hero-modal.component.html',
  styleUrls: ['./hero-modal.component.sass']
})
export class HeroModalComponent implements OnInit {
  @Input() showclass: boolean = false;
  @Output() closeRequest = new EventEmitter();
  @Input() dataComics: Array<any>=[];

  constructor(private data:DataService, public localStore: LocalStorageService) {
  }

  ngOnInit(): void {
  }

  // modalComics(comics:any){
  //   console.log("recibiste a comics", comics)
  //   this.data.getComics(comics).subscribe(resp=> {
  //     console.log("Soy comics",resp)
  //   })
  // }

  closeModal(){
    this.closeRequest.emit();
  }

  addFavorites(data:any){
    console.log("agregaste a lista", data)
    // let nombreComics: string = data.id;
    this.localStore.addComics({
      idComics: data.id,
      imgComics: data.thumbnail.path +'.'+ data.thumbnail.extension,
      titleComics: data.title,
      descriptionComics: data.description,
      priceComics: data.prices[0]. price
    })
    console.log(this.localStore.getComicsLocalStorage());
    this.closeModal()
  }

  // localStorage.setItem('nombre', nombreComics:string);
}

