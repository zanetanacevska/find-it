import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'edit-place',
  templateUrl: './edit-place.component.html',
})
export class EditPlaceComponent implements OnInit {
  sectionForm: FormGroup;
  submitted = false;

  title: string;
  description: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.sectionForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  get sectionFormControls() {
    return this.sectionForm.controls;
  }

  onSubmit() {
    debugger;
    this.submitted = true;
    if (this.sectionForm.invalid) {
      return;
    }
    alert('SUCCESS!!');
  }
}
