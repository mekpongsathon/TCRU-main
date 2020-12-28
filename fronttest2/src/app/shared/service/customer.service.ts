import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Emloyeeinterface } from '../interface/emloyeeinterface';
import { map, tap } from 'rxjs/operators';
import { element } from 'protractor';
import { Observable, Subject } from 'rxjs';
import { stringify } from 'querystring';
import { ApiConstants } from '../constants/ApiConstants';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private emloyeeinterface = new Subject<Emloyeeinterface>();
  private url = '/api/register/';
  private validateEmailURL = '/api/emailvailate/';
  constructor(private http: HttpClient) { }
  // getCustomer() {
  //   let httpParms = new HttpParams();
  //   const observable = this.http.get<Emloyeeinterface[]>(' ', { params: httpParms })
  //   return observable;
  // }
  getCustomer() {
    return this.http.get<Emloyeeinterface[]>(this.url).pipe(
      map(users => {
        const newUsers = [];
        for (let user of users) {
          // const email = user.mail;
          const uName = user.username;
          newUsers.push({ username: uName });
        }
        return newUsers;
      }),
      tap(users => console.log(users))
    )
  }

  getCustomerByUsername(
    username: string
  ): Observable<{ status: string; data: Emloyeeinterface; code: number }> {
    try {
      return this.http.get<Emloyeeinterface[]>(`${ApiConstants.baseURl}${this.url}${username}`).pipe(
        map(response => {
          this.emloyeeinterface.next(response["data"][0]);
          return {
            status: response["result"],
            code: response["code"],
            data: response["data"][0] as Emloyeeinterface
          };
        })
      );
    } catch (error) {
      console.table(error.message);
    }
  }




  getCustomerByUsernameValidate(username: string) {
    const user = this.http.get<Emloyeeinterface[]>(`${ApiConstants.baseURl}${this.url}${username}`)
    return user;
  }

  // getCustomerByUsername(username: string) {
  //   const user = this.http.get<Emloyeeinterface[]>(`${this.url}${username}`)
  //   return user;
  // }



  getCustomerByEmail(email: string) {
    return this.http.get<any[]>(`${ApiConstants.baseURl}${this.validateEmailURL}${email}`)
  }

  postCustomer(body: Emloyeeinterface) {
    return this.http.post(this.url, body)
  }

  getCustomerLogin(): Subject<Emloyeeinterface> {
    return this.emloyeeinterface;
  }

}
