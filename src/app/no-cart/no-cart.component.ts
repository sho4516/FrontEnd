import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-no-cart',
  templateUrl: './no-cart.component.html',
  styleUrls: ['./no-cart.component.css']
})
export class NoCartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectFun()
  {
    this.router.navigate(['/users/Login']);
  }

}
