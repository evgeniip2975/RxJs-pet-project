import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  constructor() { }

  @Input()
  mainText!: string

  @Output()
  sayHi = new EventEmitter()

  ngOnInit(): void {
  }

  onSayHi() {
    this.sayHi.emit()
  }
}
