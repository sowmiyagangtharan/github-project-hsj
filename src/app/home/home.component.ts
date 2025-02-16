import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute, Router } from '@angular/router';
 //  import '../../../../node_modules/aos/dist/aos.css';
 import AOS from 'aos';
//  import 'aos/dist/aos.css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router,private route: ActivatedRoute) { }

 ngOnInit(): void {
    AOS.init(); 
  }


  viewtools(){
    this.router.navigateByUrl('Hsjlayout')
  }
  viewtools1(){
    this.router.navigateByUrl('Hsjlayout1')
  }
  viewtools2(){
    this.router.navigateByUrl('Hsjlayout2')
  }
}
