import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hsjlayout1',
  templateUrl: './hsjlayout1.component.html',
  styleUrls: ['./hsjlayout1.component.css']
})
export class Hsjlayout1Component implements OnInit {

  constructor(public router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
 
  }

  viewtools(){
    this.router.navigateByUrl('Hsjlayout')
  }
  viewtools2(){
    this.router.navigateByUrl('Hsjlayout2')
  }

}
