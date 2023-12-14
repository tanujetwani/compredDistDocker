import { Component, OnInit } from '@angular/core';
import { ComplaintRedressalServiceService } from './complaint-redressal-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ComplaintRedressal';

  ngOnInit():void{}

  constructor(public service:ComplaintRedressalServiceService){}
}
