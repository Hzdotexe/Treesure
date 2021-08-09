import { Component, Output, EventEmitter } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  @Output() confirmChecked: EventEmitter<any>;
  displayModal: boolean;

  constructor() {
    this.displayModal = false;
    this.confirmChecked = new EventEmitter<any>();
  }

  showModalDialog() {
    this.displayModal = true;
  }

  hideModalDialog() {
    this.displayModal = false;
  }

  yes() {
    this.confirmChecked.emit(true);
  }

  no() {}
}
