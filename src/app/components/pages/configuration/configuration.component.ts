import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewbarModalComponent } from '../../modals/newbar-modal/newbar-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor(private pageTitleService:PagetitleService,public dialog: MatDialog,private router:Router){}

  inputDisabled:boolean = false;

  divs: Array<{ barName: string, checked: boolean }> = [];

  toggleInput(){
    this.inputDisabled= !this.inputDisabled;
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '52.875rem';
    dialogConfig.height = '42.75rem';
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      divs: this.divs // Pasar la lista divs al modal
    };
    
    const dialogRef = this.dialog.open(NewbarModalComponent, dialogConfig);
  
    dialogRef.afterClosed().subscribe((result: Array<{ barName: string, checked: boolean }>) => {
      if (result) {
        this.divs = result; // Actualiza la lista divs con los datos del modal
      }
    });
  }
  
  moveadd(){
    this.router.navigate(['/addbottle'])
  }
  
  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Configuración')
  }
  viewcatalogue(){
    this.router.navigate(['/catalogue'])
  }
}
