import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nombre-hijo',
  templateUrl: './nombre-hijo.component.html',
  styleUrls: ['./nombre-hijo.component.scss']
})
export class NombreHijoComponent implements OnInit {

  @Input() nombreHijo:string='';
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
