import { Component, OnInit } from '@angular/core';
import { elementAnimations } from 'src/app/animations/elementAnimation';
import { Property} from 'src/app/models/Project';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  animations: [elementAnimations]
})
export class DetailComponent implements OnInit {
  
  property! : Property;

  constructor() { }

  ngOnInit(): void {
  }

}
