import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string='';
  public project: Project;
  public status: string = '';
  public filesToUpload: Array<File> = [];
  public saveProject:any;
  public url:string;

  constructor(
    private projectService: ProjectService,
    private uploadService: UploadService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.title = 'Editar proyecto';
    this.project = new Project('','','','',2022,'','');
    this.url = Global.url;
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

  onSubmit(form: NgForm) {
    this.projectService.updateProject(this.project).subscribe(
      response => {

        if(response.project){

          // Subir la imagen
          if(this.filesToUpload.length >= 1){
            this.uploadService.makeFileRequest(Global.url+'upload-image/'+response.project._id, [], this.filesToUpload,'image').then((result:any) => {
              form.reset();
            })
          }
          this.saveProject = response.project;
          this.status = 'success'
          console.log(response);
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error)
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
