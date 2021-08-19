import { Injectable } from '@angular/core';
import { Comics } from './../comicsInterface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  arrayComics: Array<Comics>=[];

  constructor() {
  }

  getComicsLocalStorage(){
     let objt={};
    if(typeof localStorage.getItem('comics') === 'string' ){
      console.log(2)
      objt= JSON.parse(localStorage.getItem('comics') || '{}');
      this.arrayComics=Object.values(objt);
    }
    return this.arrayComics;
  }

 addComics(comic: Comics){
    this.arrayComics.push(comic);
    let comics: Array<Comics>=[];
   if( typeof localStorage.getItem('comics') === 'string' ){
    comics= Object.values(JSON.parse(localStorage.getItem('comics') || '{}'));
    comics.push(comic);
    localStorage.setItem('comics', JSON.stringify(comics))
    this.arrayComics = comics
   }
   else{
    localStorage.setItem('comics', JSON.stringify(comics))
   }
 }

 deleteComics(comic:Comics){
  for(let i=0; i< this.arrayComics.length; i++){
    if(comic== this.arrayComics[i]){
      this.arrayComics.splice(i,1)
      localStorage.setItem('comics', JSON.stringify(this.arrayComics))
    }
  }
  }
}
