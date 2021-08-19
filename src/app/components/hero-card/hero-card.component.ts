import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/service';


@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.sass']
})
export class HeroCardComponent implements OnInit {
  characters:any;
  show: boolean = false;
  dataComics: Array<any>=[];

  constructor(private data:DataService) {}

  ngOnInit() {
    this.data.getCharacters().subscribe(resp=> {
      console.log("soy data",resp.data)
      this.characters=resp.data.results;
      console.log(this.characters)
    })
  }

  filterItems(items:Array<any>) {
    return items.filter((item, index:number) => index < 4)
  }

  showModal(comic:any) {
    this.data.getComics(comic.resourceURI).subscribe(resp=> {
      console.log("Soy comics",resp.data.results)
      this.dataComics = resp.data.results;
      this.show = true;
    });
  }

  closeModal() {
    this.show = !this.show
  }

}
