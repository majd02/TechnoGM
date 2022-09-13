import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
 
import {map} from "rxjs";
import { LoginRequest } from '../models/LoginRequest';
import { RegistrationRequest } from '../models/RegistrationRequest';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  
  constructor(private http:HttpClient) { }

  authenticate(user:LoginRequest) {
    return this.http
      .post<any>("http://localhost:40361/api/Auth/token", user)
      .pipe(
        map(userData => {  
          localStorage.setItem("email", user.email);
          let tokenStr = "Bearer " + userData.token;
          localStorage.setItem("token", tokenStr); 
          
          return userData;
        })
      );
  }
  isUserLoggedIn() {
    let user = localStorage.getItem("email");
    console.log(!(user === null));
    return !(user === null);
  }
  logOut() {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
  }
  adduser(user:RegistrationRequest){
    return this.http.post<RegistrationRequest>("http://localhost:40361/api/Auth/register",user);
    }
}
