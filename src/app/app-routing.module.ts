import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTES
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path:'about', component: AboutComponent },
  { path:'projects', component: ProjectsComponent },
  { path:'create-project', component: CreateComponent },
  { path:'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
