import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  public title: string='';
  public project: Project;

  constructor(
    private projectService: ProjectService
  ) {
    this.title = 'Crear proyecto';
    this.project = new Project('','','','',2022,'','');
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
