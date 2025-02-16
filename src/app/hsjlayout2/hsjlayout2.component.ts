import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hsjlayout2',
  templateUrl: './hsjlayout2.component.html',
  styleUrls: ['./hsjlayout2.component.css']
})
export class Hsjlayout2Component implements OnInit {

  constructor(public router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
 
  }

  viewtools(){
    this.router.navigateByUrl('Hsjlayout')
  }
  viewtools1(){
    this.router.navigateByUrl('Hsjlayout1')
  }

}
