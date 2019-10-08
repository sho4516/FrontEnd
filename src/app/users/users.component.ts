import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  demo = localStorage.getItem('demo');

  constructor() { }

  ngOnInit() {
  }

}
