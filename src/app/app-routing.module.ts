import { NgModule } from '@angular/core';
import { OutletContext, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageComponent } from './components/page/page.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  {  
  path: '',
  component: LoginComponent
  },
  {  
    path: 'project',
    component: ProjectsComponent,
    
  },
  {  
    path: 'detail/:id',
    component: DetailComponent,
    outlet: 'd',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
