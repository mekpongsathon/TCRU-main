import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeserviceService } from 'src/app/shared/service/employeeservice.service';

export function uniqueEmailValidator(customerService: EmployeeserviceService): AsyncValidatorFn {
  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return customerService.getCustomerByEmail(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? { 'uniqueEmail': true } : null;
      })
    );
  }
}


@Directive({
  selector: '[uniqueEmail]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueEmailValidatorDirective, multi: true }]
})
export class UniqueEmailValidatorDirective implements AsyncValidator {

  constructor(private customerService: EmployeeserviceService) { }
  /////////////////////////////////////////////////////////////////////////////////////////////////////VVV
  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.customerService.getCustomerByEmail(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? { 'uniqueEmail': true } : null;
      })
    );
  }

}