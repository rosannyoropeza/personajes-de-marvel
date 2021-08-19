import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

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

  getCharacters():Observable<any> {
    return this.http.get("http://gateway.marvel.com/v1/public/characters",this.options);
  }

  getComics(urlComics:string):Observable<any> {
    return this.http.get(urlComics,this.options);
  }

}
