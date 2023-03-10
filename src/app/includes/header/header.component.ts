import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
constructor(private router:Router){}
  menuType=true

  ngOnInit(): void {
    this.router.events.subscribe((res:any)=>{
      if(res.url){
    if(localStorage.getItem("session")){
      this.menuType=false
    }
    else{
      this.menuType=true
    }}
  })
  }


  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
}
