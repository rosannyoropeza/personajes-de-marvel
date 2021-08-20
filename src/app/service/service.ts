import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  comics$: Subject<any>;

  constructor(private http: HttpClient) {
    this.comics$ = new Subject();
  }

  //CLAVES  QUE SE USARAN PARA CONECTAR A LA API DE MARVEL
  options: any ={
    params:
      {
          apikey: 'b7068376d900bcebfd7e95228f6830c7',
          ts: 3000,
          hash: '61dab4049ec3ae40beb72b45e06f608c'
      },
      headers:{
        Accept:"*/*"
      }
    }

  //PETICION PARA OBTENER LOS PERSONAJES
  getCharacters():Observable<any> {
    return this.http.get(`${"http://gateway.marvel.com/v1/public/characters?"}&limit=10`,this.options);
  }

  //PETICION PARA OBTENER LOS COMICS RELACIONADOS AL PERSONAJES QUE SE MUESTRAN EN EL MODAL
  getComics(urlComics:string):Observable<any> {
    return this.http.get(urlComics,this.options);
  }

  //PETICION PARA REALIZAR LA BUSQUEDA
  searchCharacters(text:any): Observable<any> {
    return this.http.get(`${"http://gateway.marvel.com/v1/public/characters?nameStartsWith="}${text}&limit=10`,this.options);
  }

  //PETICION PARA ORDENAR DE FORMAR ASCEDENTENTE A-Z
  sortCharactersA(): Observable<any> {
    return this.http.get("http://gateway.marvel.com/v1/public/characters?orderBy=name&limit=10",this.options);
  }

  //PETICION PARA ORDENAR DE FORMAR DESCENDENTE Z-A
  sortCharactersZ(): Observable<any> {
    return this.http.get("http://gateway.marvel.com/v1/public/characters?orderBy=-name&limit=10",this.options);
  }

  //FUNCION PARA CREAR EL OBSERVABLE QUE SE PUEDE ACCEDER DESDE CUALQUIER COMPONENTE
  getComics$(): Observable<any> {
    return this.comics$.asObservable();
  }

}
