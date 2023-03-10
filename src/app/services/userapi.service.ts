import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private http:HttpClient) { }

  userReg(body:any){
    return this.http.post(`http://15.206.171.20:9090/saveUser`,body,{responseType:'text'})
  }

  getCountries(){
    return this.http.get(`http://15.206.171.20:9090/countries`)
  }
  
  getState(countryId:any){
    
    return this.http.get(`http://15.206.171.20:9090/states/${countryId}`)
  }

  getCity(stateId:any){
    
    return this.http.get(`http://15.206.171.20:9090/cities/${stateId}`)
  }

  checkMail(mail:any){
    return this.http.get(`http://15.206.171.20:9090/emailcheck/${mail}`,{responseType:'text'})
  }


  unlock(body:any){
    return this.http.post(`http://15.206.171.20:9090/unlock`,body,{responseType:'text'})
  }

  login(body:any){
    return this.http.post(`http://15.206.171.20:9090/login`,body,{responseType:'text'})
  }

  forgotPassword(email:any){
    return this.http.get(`http://15.206.171.20:9090/forgotPwd/${email}`,{responseType:'text'})
  }
}
