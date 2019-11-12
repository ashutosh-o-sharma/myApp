import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {

  constructor(private userService : AuthServiceService, private router : Router) { }

  ngOnInit() {}


  login(form){
    this.userService.userLogin(form.value).subscribe((allowed)=>{
      if(allowed){
        this.router.navigate(['/tabs/tab1']);
      }else{
        alert("You are not abuthorized")
      }
    });
  }

}
