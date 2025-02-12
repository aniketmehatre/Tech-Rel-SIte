import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placed-students',
  templateUrl: './placed-students.component.html',
  styleUrls: ['./placed-students.component.css']
})
export class PlacedStudentsComponent implements OnInit {
  poster: any = [];
  count: any = [];

  ngOnInit(): void {
    this.counterImgUrl()
    this.counterImgPoster()
  }

  counterImgUrl() {
    for (let i = 1; i <= 21; i++) {
      this.count.push(`../../../assets/company_logo/${i}.webp`)
    }
  }

  counterImgPoster() {
    for (let i = 1; i <= 10; i++) {
      this.poster.push(`../../../assets/facebook/selected_${i}.jpg`)
    }
  }
}
