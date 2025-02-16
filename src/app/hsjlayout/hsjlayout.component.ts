import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hsjlayout',
  templateUrl: './hsjlayout.component.html',
  styleUrls: ['./hsjlayout.component.css']
})
export class HsjlayoutComponent implements OnInit {

  constructor(public router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
 
  }

  viewtools1(){
    this.router.navigateByUrl('Hsjlayout1')
  }
  viewtools2(){
    this.router.navigateByUrl('Hsjlayout2')
  }


}
