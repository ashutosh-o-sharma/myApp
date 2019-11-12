import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }


  userLogin(user){
    console.log(user);
    if(user.email === null || user.password === null){
      return Observable.throw("Please enter the credentials")
    }else{
      return Observable.create(observer=>{
        let access = (user.email === "ashu@gmail.com" && user.password === "pwd");
        observer.next(access);
        observer.complete();
      })
    }
  }
}
