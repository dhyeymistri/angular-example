import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.scss'
})
export class NgClassComponent {
  isStyled: boolean = false;

  classObj = {
    styled: false
};

constructor(){
  this.isStyled = true;
  this.toggleStyle();
}

toggleStyle(): void{
  this.isStyled = !this.isStyled;

  this.classObj = {
    styled: this.isStyled
  };
}
}
