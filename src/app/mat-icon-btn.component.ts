import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mat-icon-btn',
  template: `
    <div class="btn-div" (mouseenter)="this.hoverDiv(true)" (mouseleave)="this.hoverDiv(false)" [ngStyle]="{'background-color': this._currentBgColor}">
      <button>  
          <span class="material-icons" [ngStyle]="{'color':this._currentFgColor}"><ng-content></ng-content></span>
      </button>
    </div>
  `,
  styleUrls: ['mat-icon-btn.component.css']
})
export class MatIconBtnComponent implements OnInit {
  _bgColor = '#075E54';
  _bgHoverColor = 'unset';
  _currentBgColor = this._bgColor;

  _fgColor='white';
  // _fgHoverColor = this._fgColor;
  _currentFgColor = this._fgColor;
  
  constructor() {}

  ngOnInit(): void { 
    this.hoverDiv(false);
  }

  @Input()
  set bgHoverColor(c:string) {
    this._bgHoverColor = c;
  }

  @Input()
  set bgColor(c: string) {
    this._bgColor = c;
  }

  @Input()
  set fgColor(c: string) {
    this._fgColor = c;
  }

  // @Input()
  // set fgHoverColor(c: string) {
  //   this._fgHoverColor = c;
  // }

  hoverDiv(flag: boolean){
    if(flag){
      this._currentBgColor = this._bgHoverColor;
      // this._currentFgColor = this._fgHoverColor;
    } else{
      this._currentBgColor = this._bgColor;
      this._currentFgColor = this._fgColor;
    }
  }
}
