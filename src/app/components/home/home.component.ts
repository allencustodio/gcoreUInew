import { Component, OnInit } from '@angular/core';
import { propertiesList } from 'src/app/helpers/projectList';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  propertiesList = propertiesList;

  constructor() { }

  ngOnInit(): void {
  }

}
