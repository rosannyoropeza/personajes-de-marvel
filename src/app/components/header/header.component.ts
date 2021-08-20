import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/service/service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  searchForm = new FormGroup({
    search: new FormControl('')
  })

  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  //CLICK AL DARLE AL BOTON BUSCAR PARA TRAER LA DATA BUSCADA
  search() {
    if(this.searchForm.value.search){
      this.data.searchCharacters(this.searchForm.value.search).subscribe(resp=> {
        this.data.comics$.next(resp.data.results);
      });
    }
    else{
      this.data.getCharacters().subscribe(resp=> {
        this.data.comics$.next(resp.data.results);
      })
    }
  }
}
