import { Component, OnInit } from '@angular/core';
import { Link } from '../model/link';
import { DataserviceService } from '../services/dataservice.service';



@Component({
  selector: 'app-daily-link-list',
  templateUrl: './daily-link-list.component.html',
  styleUrls: ['./daily-link-list.component.scss']
})
export class DailyLinkListComponent implements OnInit {

  dailyLink: Link[];

  constructor(private dataService: DataserviceService){}

  ngOnInit() {
    this.dataService.getDailyLink().subscribe(links => this.dailyLink=links);
    //this.dataService.getDailyLink().subscribe(function onSuccess(link){
     // this.dailyLink=link;
    //}
  }

}
