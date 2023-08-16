import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import { MatDialog } from '@angular/material/dialog';
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

  toggleInput(){
    this.inputDisabled= !this.inputDisabled;
  }

  openModal(){
    const dialogRef = this.dialog.open(NewbarModalComponent,{
      width:'52.875rem', height:'42.75rem',
      disableClose:true,

    });

  }

  moveadd(){
    this.router.navigate(['/addbottle'])
  }
  
  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Configuración')
  }
}
