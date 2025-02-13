import { Component,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() message!: string;

  constructor(public activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close();
  }
}
