import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTES
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'projects', component: ProjectsComponent },
  { path:'project/:id', component: DetailComponent },
  { path:'create-project', component: CreateComponent },
  { path:'edit-project/:id', component: EditComponent },
  { path:'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
