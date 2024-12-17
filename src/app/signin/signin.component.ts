import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinform!: FormGroup;
   constructor(public fb: FormBuilder, public Router: Router) {}

  ngOnInit(): void {
    this.signinform = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          mob_no: ['', Validators.required],
        });
  }


  submit() {
    if (this.signinform.invalid) {
      this.signinform.markAllAsTouched();
    } else {
      this.Router.navigate(['/user-list']);
    }
  }
}
