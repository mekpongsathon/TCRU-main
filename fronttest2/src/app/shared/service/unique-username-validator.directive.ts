import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeserviceService } from 'src/app/shared/service/employeeservice.service';
import { map } from 'rxjs/operators';



export function uniqueUsernameValidator(customerService: EmployeeserviceService): AsyncValidatorFn {
  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return customerService.getCustomerByUsername(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? { 'uniqueUsername': true } : null;
      })
    );
  };
}

@Directive({
  selector: '[uniqueUsername]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUsernameValidatorDirective, multi: true }]
})
export class UniqueUsernameValidatorDirective implements AsyncValidator {

  constructor(private customerService: EmployeeserviceService) { }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return uniqueUsernameValidator(this.customerService)(c);
  }

}