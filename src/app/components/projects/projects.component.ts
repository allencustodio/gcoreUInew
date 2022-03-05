import { Component, HostBinding, OnInit } from '@angular/core';
import { elementAnimations,ANIMATION_ELEMENT } from 'src/app/animations/elementAnimation';
import { propertiesList } from 'src/app/helpers/projectList';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [elementAnimations]
})
export class ProjectsComponent implements OnInit {
  @HostBinding('@elementAnimations') animate :any ;
  animationElement = ANIMATION_ELEMENT;
  
  propertiesList = propertiesList;
  constructor(public ui: UiService) { }

  ngOnInit(): void {
  }

  animationDone(event: { element: HTMLDivElement; }) {
    (event.element as HTMLDivElement).childNodes.forEach((item) => {
      const node = item as HTMLDivElement;
      if (node.classList && node.classList.contains('active')) {
        node.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  onNavigate(){
    this.ui.openState.next('open');
  }

}
