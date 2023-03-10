import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private api:UserapiService, private route:Router){

}


loader=false;
  login=new FormGroup({
    email:new FormControl('',[Validators.required]),
    pwd:new FormControl('',[Validators.required]),
  })
loginRes:any
loginMsg:any
isSiggnedIn=false
  loginbtn(){
    this.loader=true
    this.api.login(this.login.value).subscribe((res:any)=>{
     this.loginRes=res
     this.loader=false
     localStorage.setItem("session","username")
     this.isSiggnedIn=true
     if(this.loginRes=='SUCCESS')
     {
      this.route.navigate(['/home'])
     }else{
      this.loginMsg=res
     }
    })
  }
}
