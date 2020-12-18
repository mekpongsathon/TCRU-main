import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/shared/service/customer.service';
import { compareValidator } from 'src/app/shared/service/compare-validator.directive';
// import { resolve } from 'dns';
import { uniqueEmailValidator } from './../../shared/service/unique-email-validator.directive';
import { uniqueUsernameValidator } from 'src/app/shared/service/unique-username-validator.directive';
import { JarwisService } from 'src/app/shared/service/jarwis.service';
import { TokenService } from 'src/app/shared/service/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {




  // private duplicateEmailDbounce;
  reactiveForm: FormGroup;
  submitted = false;

  constructor(
    private customerService: CustomerService,
    private http: HttpClient,
    private fb: FormBuilder,

    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ) {

  }
  ngOnInit() {
    this.customerService.getCustomer().subscribe()
    this.createForm();
  }

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null,
    firstname: null,
    lastname: null,
    role_id: 2,
  };
  public error = [];

  createForm() {
    // this.reactiveForm = new FormGroup({
    //   email: new FormControl('', Validators.required),
    //   emailConfirm: new FormControl('', [Validators.required, CompareValidator('email')]),
    //   password: new FormControl('', Validators.required),
    //   passwordConfirm: new FormControl('', [Validators.required, CompareValidator('password')])
    // })
    this.reactiveForm = this.fb.group({
      username: ['', null, uniqueUsernameValidator(this.customerService), Validators.minLength(6), Validators.maxLength(16), Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')],
      // tel: ['', [Validators.required], Validators.maxLength(10), Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')],
      // email: ['', [Validators.required], uniqueEmailValidator(this.customerService)],
      // emailConfirm: ['', [Validators.required, compareValidator('email')], uniqueEmailValidator(this.customerService)],
      password: ['', [Validators.required], Validators.maxLength(16), Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')],
      passwordConfirm: ['', [Validators.required, compareValidator('password'), Validators.maxLength(16)]],
      firstname: ['', [Validators.required], Validators.maxLength(16)],
      lastname: ['', [Validators.required], Validators.maxLength(16)],
      role_id: [2, [Validators.required]],
      telephone: ['', [Validators.required]],
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

  get lastname() {
    return this.reactiveForm.get('lastname')
  }
  get firstname() {
    return this.reactiveForm.get('firstname')
  }
  get username() {
    return this.reactiveForm.get('username')
  }
  get email() {
    return this.reactiveForm.get('email')
  }
  get emailConfirm() {
    return this.reactiveForm.get('emailConfirm')
  }
  get password() {
    return this.reactiveForm.get('password')
  }
  get passwordConfirm() {
    return this.reactiveForm.get('passwordConfirm')
  }
  get telephone() {
    return this.reactiveForm.get('telephone')
  }





}


































































  // ngOnInit(): void {
  //   this.saveCustomerFormGroup = this.formBuilder.group({
  //     username: [null, Validators.required],
  //     password: ['', Validators.required, Validators.minLength(6)],
  //     firstname: ['', [Validators.required]],
  //     lastname: ['', [Validators.required]],
  //     mail: ['', [Validators.required, Validators.email, this.isEmailUnique.bind(this)]],
  //     tel: ['', [Validators.required]],
  //     role_id: [2, [Validators.required]],

  //   });
  // }






  // public username;

  // saveCustomerFormGroup = new FormGroup({
  //   username: new FormControl(),
  //   password: new FormControl(),
  //   firstname: new FormControl(),
  //   lastname: new FormControl(),
  //   mail: new FormControl(),
  //   tel: new FormControl(),
  //   role_id: new FormControl(2),
  // });



 // ต่อ api ไม่ใช้ service
    // if (this.saveCustomerFormGroup.invalid) {
    //   return;
    // } else {
    //   document.getElementById("result_span").innerHTML = "Loading"
    //   // const body = { username: this.username, password: this.password };
    //   const customer = this.saveCustomerFormGroup.getRawValue();
    //   this.http.post('http://127.0.0.1:8000/api/register', customer).subscribe(result => {
    //     document.getElementById("result_span").innerHTML = JSON.stringify(result);
    //   });
    //   // this.router.navigate(['/login']);
    // }
