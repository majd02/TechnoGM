import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { LoginRequest } from 'src/app/models/LoginRequest';
import { RegistrationRequest } from 'src/app/models/RegistrationRequest';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any = new RegistrationRequest(); 
  
  user1:any = new LoginRequest(); 
  constructor(private serviceuser :AuthService,private router: Router) { }
  email!: string;
  password!: string;
  msg = '';
  invalidLogin = false
  
  @Input() error!: string | null;
  ngOnInit(): void {
  }
  adduser(){
    console.log(this.user)
    this.serviceuser.adduser(this.user).subscribe();
    
     
    }
    checkLogin() {
      (this.serviceuser.authenticate(this.user).subscribe(
          data => { 
            this.router.navigate(['/drop'])
            this.invalidLogin = false
          },
          error => {
            this.invalidLogin = true
            this.error = error.message;
  
          }
        )
      );
      console.log(this.user);
  
    }
   
    }
      

