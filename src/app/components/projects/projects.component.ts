import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = [];
  public url:string = '';

  constructor(
    private projectService: ProjectService
  ) {
    this.projectService.getProjects().subscribe(
      response => {
        if(response){
          this.projects = response.project;
          this.url = Global.url;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
  }

}
