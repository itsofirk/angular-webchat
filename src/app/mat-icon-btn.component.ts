import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mat-icon-btn',
  template: `
    <div class="btn-div" (mouseenter)="this.colorDiv(this.hoverColor)" (mouseleave)="this.colorDiv(this.baseColor)" [ngStyle]="{'background-color': this._currentColor}">
      <button>
          <span class="material-icons"><ng-content></ng-content></span>
      </button>
    </div>
  `,
  styleUrls: ['mat-icon-btn.component.css']
})
export class MatIconBtnComponent implements OnInit {
  hoverColor = '#128C7E';
  baseColor = '#075E54';
  _currentColor = this.baseColor;
  
  constructor() {}

  ngOnInit(): void { }

  @Input()
  ngHoverColor(c:string) {
    this.hoverColor = c;
  }

  @Input()
  ngBaseColor(c:string) {
    this.baseColor = c;
  }

  colorDiv(c:any){
    this._currentColor = c;
  }
}
