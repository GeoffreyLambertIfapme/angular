import { Component, OnInit } from '@angular/core';
import { getData } from 'src/app/data/homepage';
import { Cat } from 'src/app/models/cat';

@Component({
  selector: 'app-cats-page',
  templateUrl: './cats-page.component.html',
  styleUrls: ['./cats-page.component.css']
})
export class CatsPageComponent implements OnInit {

  public cat = new Cat();

  constructor() { }

  ngOnInit(): void {
  }

  public getTitle() {
    return getData().titre;
  }
  public addToMoral() {
    this.cat.addToMoral(1);
  }
  public addWeight(){
    this.cat.addWeight(0.1);
  }
}
