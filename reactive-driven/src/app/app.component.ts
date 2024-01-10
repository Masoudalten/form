import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './validators/pass.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'template-driven';

  registrationForm: FormGroup;
  formSubmitted: boolean = false;

  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstname: new FormControl(null, [Validators.minLength(3), Validators.maxLength(30)]),
      lastname: new FormControl(null, [Validators.minLength(3), Validators.maxLength(30)]),
      email: new FormControl(null, [Validators.email, Validators.maxLength(30)]),
      pass: new FormControl(null, [Validators.minLength(3), Validators.maxLength(60)]),
      pass2: new FormControl(null, CustomValidators.passwordMatch)
    })
  }


  OnFormSubmitted() {
    console.log(this.registrationForm);
    this.formSubmitted = true;
  }
}
