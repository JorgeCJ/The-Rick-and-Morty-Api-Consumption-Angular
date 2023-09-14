import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from './services/rickandmorty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any[] = [];

  constructor(private apiService: RickandmortyService) {}

  ngOnInit(): void {
    this.gettingData();
  }
  gettingData(){
    this.apiService.getCharacter().subscribe(data => {
      this.data = data.results;
      console.log(this.data);
    })
  }
}
