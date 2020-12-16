import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/shared/service/customer.service';
import { compareValidator } from 'src/app/shared/service/compare-validator.directive';
// import { resolve } from 'dns';
import { uniqueEmailValidator } from './../../shared/service/unique-email-validator.directive';
import { uniqueUsernameValidator } from 'src/app/shared/service/unique-username-validator.directive';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  // private duplicateEmailDbounce;
  reactiveForm: FormGroup;
  submitted = false;

  constructor(private customerService: CustomerService, private http: HttpClient, private fb: FormBuilder) {

  }
  ngOnInit() {
    this.customerService.getCustomer().subscribe()

    this.createForm();
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      username: ['', null, uniqueUsernameValidator(this.customerService), Validators.minLength(6), Validators.maxLength(16), Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')],
      password: ['', [Validators.required], Validators.maxLength(16), Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')],
      role_id: [2, [Validators.required]],
    })
  }


  onClickRegis() {

    this.submitted = true;
    if (this.reactiveForm.invalid) {
      return;
    } else {
      const customer = this.reactiveForm.getRawValue();
      this.customerService.postCustomer(customer).subscribe();
    }
  }

  get username() {
    return this.reactiveForm.get('username')
  }
  get password() {
    return this.reactiveForm.get('password')
  }

}
