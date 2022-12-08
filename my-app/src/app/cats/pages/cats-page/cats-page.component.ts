import { Component, OnInit } from '@angular/core';
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

  public action() {
    
  }

}
