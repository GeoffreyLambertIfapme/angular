import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  @Input()
  minValue!: number;

  @Input()
  maxValue!: number;

  @Input()
  currentValue!: number;

  @Input()
  type: string = "success";

  constructor() { }

  ngOnInit(): void {
  }

  public getClass() {
    switch (this.type) {
        case 'success': return 'progress-bar bg-success';
        case 'error': return 'progress-bar bg-error';
        default: return "progress-bar";
    }
  }

  public getPercentage() {
    return this._percentage(this.currentValue, this.maxValue);
  }

  
  private _percentage = (current: number, max: number) => (current / max) * 100;
}
