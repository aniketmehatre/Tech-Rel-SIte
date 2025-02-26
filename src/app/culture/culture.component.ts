import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css']
})
export class CultureComponent {
  constructor(private router : Router){}
  goToTest(){
    this.router.navigateByUrl("https://techreal.site/#/login");
  }
}
