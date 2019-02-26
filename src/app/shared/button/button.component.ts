import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {

  @Input() label: string;
  @Input() type: string;
  @Output() onClick = new EventEmitter<any>();
  
  onClickButton(event) {
    this.onClick.emit(event);
  }

}
