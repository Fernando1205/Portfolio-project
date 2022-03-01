import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title: string = '';
  subtitle: string = '';
  email: string = '';

  constructor() {
    this.title = 'SOBRE MI';
    this.subtitle = 'Desarrollador web';
    this.email = 'fer.web.developer@gmail.com'
  }

  ngOnInit(): void {
  }

}
