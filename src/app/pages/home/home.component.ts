import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { WetuServiceService } from 'src/app/service/wetu-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  animations: [
    trigger("notificationAmine",[
      transition(":enter",[
        style ({
          display: "block",
          opacity: 0,
          transform:"translateX(-35px)"
        }),
        animate("1s 250ms")
      ]),
  
    ])   

  ]
})
export class HomeComponent implements OnInit {

  videoStyling: any;
  removingFixed: any;
  retrivePost: any = []

   @HostListener('document:scroll') scrollover(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){

      this.videoStyling = {
        'transform' : 'scale(1.04)',
        'transition': 'all 0.4s ease-in-out',
        'transition-delay': '0.2ms'
      }
    }else {
      this.videoStyling = {
      
        'transition': 'all 0.6s ease-in-out',
        'transition-delay': '0.2ms'
      }
    }   
  }

  constructor (private fbs: WetuServiceService){}

  ngOnInit(): void {
   this.fbs.loadPost().subscribe({
    next: (data) =>{
      this.retrivePost = data  
    }
   })
  }


  
}
