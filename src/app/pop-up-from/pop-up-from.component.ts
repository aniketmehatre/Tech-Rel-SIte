import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-pop-up-from',
  templateUrl: './pop-up-from.component.html',
  styleUrls: ['./pop-up-from.component.css']
})
export class PopUpFromComponent {
  [x: string]: any;
  enqueryForm: any
  @Output() closed = new EventEmitter();

  constructor(
    private fb: FormBuilder,
  ) {
    this.enqueryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  closePopup() {
    this.closed.emit();
  }

  // submitInquaryForm() {
  //   if (this.enqueryForm.valid) {
  //     this.inquaryFormApi.inquiery_data(this.enqueryForm.value).subscribe((res: any) => {
  //       console.log(res);
  //     });
  //     alert('Request Send Successfully...');
  //     this.closePopup();
  //   }
  //   else {
  //     alert('Fill all fields first...');
  //   }
  // }
}
