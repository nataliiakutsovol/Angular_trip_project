import { Component, OnInit } from '@angular/core';
import { HeaderLables } from './config'

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {

  headerLables = HeaderLables;
  
  constructor() {}

  ngOnInit(): void {
  }


}
