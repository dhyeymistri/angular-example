import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.scss'
})
export class NgSwitchComponent {
choice: number = 0;

constructor(){
  this.choice = 1;
}

nextChoice(): void{
  this.choice += 1;
  if(this.choice > 5) this.choice=1;

  console.log(this.choice);
}

}
