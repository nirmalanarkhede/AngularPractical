import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test';
  signinform!: FormGroup;
  constructor(public fb: FormBuilder, public Router: Router) {}

  ngOnInit(): void {
    this.signinform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mob_no: ['', Validators.required],
    });
  }
  // submit() {
  //   if (this.signinform.invalid) {
  //     this.signinform.markAllAsTouched();
  //   } else {
  //     this.Router.navigate(['/user-list']);
  //   }
  // }
}
