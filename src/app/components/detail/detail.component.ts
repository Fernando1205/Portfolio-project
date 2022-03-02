import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Project } from '../../models/project';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  public url: string = '';
  public project: Project;


  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.project = new Project('','','','',2022,'','');
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      let id = params['id'];
      this.getProject(id);
    })
  }

  getProject(id:string ){
    this.projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(error);
      }
    )
  }
}
