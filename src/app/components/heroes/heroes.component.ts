import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  //FUNCION PARA ORDENAR LOS PERSONAJES
  changeSelectValue(e:any){
    if(e.target.value==="ascendiente"){
      this.data.sortCharactersA().subscribe(resp=> {
        this.data.comics$.next(resp.data.results)
      });
    }
    if(e.target.value==="descendiente"){
      this.data.sortCharactersZ().subscribe(resp=> {
        this.data.comics$.next(resp.data.results)
      });
    }
    else{
      this.data.getCharacters().subscribe(resp=> {
        this.data.comics$.next(resp.data.results);
      })
    }
  }
}
