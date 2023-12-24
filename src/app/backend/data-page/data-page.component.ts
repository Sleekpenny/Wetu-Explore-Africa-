import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { WetuServiceService } from 'src/app/service/wetu-service.service';

interface formData{
  content:string,
  location:string,
  category: string,
  createdAt:Date,
  image:string
}

@Component({
  selector: 'app-data-page',
  templateUrl: './data-page.component.html',
  styleUrls: ['./data-page.component.css']
})
export class DataPageComponent implements OnInit {

  imgSrc:any; 
  selectImg:any;

  constructor (private fbs: WetuServiceService, private router:Router){}


  ngOnInit(): void {
   
  }

  uploadImg($event) {

    const reader = new FileReader()
    reader.onload = (e)=> {
      this.imgSrc = e.target.result
    }

    reader.readAsDataURL($event.target.files[0])
    this.selectImg = $event.target.files[0]

  }
  
  onSubmit(form){

      const formDetails:formData = {
        content: form.value.content,
        location: form.value.location,
        category: form.value.category,
        createdAt: new Date(),
        image:''
      } 
      
   //   this.fbs.saveData(formDetails)
      this.fbs.uploadImg (this.selectImg, formDetails)
      form.reset()
      this.router.navigate(['/'])
  }

}