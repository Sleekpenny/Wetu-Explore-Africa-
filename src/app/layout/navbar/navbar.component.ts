import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

  animations: [
    trigger("notificationAmine",[
      transition(":enter",[
        style ({
          display: "block",
          opacity: 0,
          transform:"translateX(-35px)"
        }),
        animate("0.5s 225ms")
      ]),
      transition(":leave",[
        animate(250, style({
          opacity: 0,
          transform:"translateX(5px)"
        }))
      ])
    ])   

  ]
  
})
export class NavbarComponent {

  showMenu:boolean = false 

  toggleMeun(){
    this.showMenu = !this.showMenu
  }
}
