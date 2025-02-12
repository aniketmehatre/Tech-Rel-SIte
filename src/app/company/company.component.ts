import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  count: any = [];
  constructor() {
    this.counterImgUrl();
  }


  counterImgUrl() {
    for (let i = 1; i <= 21; i++) {
      this.count.push(`../../../assets/company_logo/${i}.webp`)
    }
  }
}
