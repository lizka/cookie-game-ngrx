import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css']
})
export class CursorComponent implements OnInit {
  @Input() public counter;
  @Input() public canBuy;
  @Output() public buyCursor = new EventEmitter();

  buyCursorWhenIsPossible() {
    if (this.canBuy) {
      this.buyCursor.next();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
