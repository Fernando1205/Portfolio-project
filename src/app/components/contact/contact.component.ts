import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public nombre:string = '';
  items = ['Karen', 'Ana'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
