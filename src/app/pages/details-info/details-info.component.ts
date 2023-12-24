import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WetuServiceService } from 'src/app/service/wetu-service.service';

@Component({
  selector: 'app-details-info',
  templateUrl: './details-info.component.html',
  styleUrls: ['./details-info.component.css'],

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
  ]
})
export class DetailsInfoComponent implements OnInit{

  postDetails: any = []
  retrivePost: any = []

  constructor (private fbs:WetuServiceService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe ({
      next: (data)=>{
        this.fbs.loadSinglePost(data['id']).subscribe({
          next:(response)=>{
            this.postDetails = response
            this.changePost(this.postDetails)
          }
        })
      }
    })
    

  }

  changePost (id){
    this.fbs.loadPost().subscribe({
      next: (data) =>{
        this.retrivePost = data 
      }
     })
  }



}
