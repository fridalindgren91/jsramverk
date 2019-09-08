import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MeComponent implements OnInit {
  text = "";

  constructor() { }

  ngOnInit() {
  }

}
