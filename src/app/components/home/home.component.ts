import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  constructor(private data:DataService ) { }

  ngOnInit(): void {
  }

}
