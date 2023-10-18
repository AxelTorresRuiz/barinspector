import { Component } from '@angular/core';
import { AuditscanModalComponent } from '../auditscan-modal/auditscan-modal.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-audittype-modal',
  templateUrl: './audittype-modal.component.html',
  styleUrls: ['./audittype-modal.component.css']
})
export class AudittypeModalComponent {
  constructor(public dialog: MatDialog){}
}
