import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() {}
  ngOnInit(): void {
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
