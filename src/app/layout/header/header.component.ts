import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

  animations: [
    trigger("notificationAmine1",[
      transition(":enter",[
        style ({
          display: "block",
          opacity: 0,
          transform:"translateX(-35px)"
        }),
        animate("0.3s 225ms")
      ]),

    ]),   
    trigger("notificationAmine2",[
      transition(":enter",[
        style ({
          display: "block",
          opacity: 0,
          transform:"translateX(-35px)"
        }),
        animate("0.5s 225ms")
      ]),

    ]),
    trigger("notificationAmine3",[
      transition(":enter",[
        style ({
          display: "block",
          opacity: 0,
          transform:"translateX(-35px)"
        }),
        animate("0.7s 225ms")
      ]),

    ])    

  ]
})
export class HeaderComponent {

}
