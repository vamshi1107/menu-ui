import { Component, OnInit } from '@angular/core';
import { Comp2Component } from './comp2/comp2.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Hotel';
  constructor() {}
  
  ngOnInit(): void {
    setInterval(this.check,1000)
  }

  orders="";
  check(){
    var v=eval(sessionStorage.getItem("orders"))
     if(v>0){
       document.getElementById("count").innerHTML=" : "+v
     }
     else{
      document.getElementById("count").innerHTML=""
     }
  }
  p(s:string):void
  {
    var ele=document.getElementById(s);
    if(ele.style.display==="none"){
        ele.style.display="block"
    }
    else{
      ele.style.display="none"
    }
    console.log("invoked")

  }

  c(s:string):void{
    let a=document.getElementById(s);
    a.style.display="none";
  }
 

  
}


