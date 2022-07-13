import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isActive: boolean = false

  ngOnInit(): void {
  }
  isSetActive() {
    this.isActive = !this.isActive
  }
}
