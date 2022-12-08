import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  @Input()
  label!: string;

  @Output()
  action = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
