import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-travel-loc',
  templateUrl: './travel-loc.component.html',
  styleUrls: ['./travel-loc.component.css']
})
export class TravelLocComponent {

  @Input() postData: any;

}
