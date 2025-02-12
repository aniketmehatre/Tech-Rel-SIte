import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  isSectionVisible = false;
  isPopupOpen = false;
  jobForm: FormGroup;
  selectedFile: File | null = null;
  @ViewChild('jobopenSection') jobopenSection!: ElementRef;


  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  scrollToJobOpen() {
    this.jobopenSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  submitForm() {
    if (this.jobForm.valid) {
      console.log("Form Submitted!", this.jobForm.value, this.selectedFile);
      alert("Job application submitted successfully!");
    }
  }


  toggleSection() {
    this.isSectionVisible = !this.isSectionVisible;
  }
}
