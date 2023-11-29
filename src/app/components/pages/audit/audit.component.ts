import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import { MatDialog } from '@angular/material/dialog';
import { AudittypeModalComponent } from '../../modals/audittype-modal/audittype-modal.component';
import { AuditscanModalComponent } from '../../modals/auditscan-modal/auditscan-modal.component';
import { AuditModalComponent } from '../../modals/audit-modal/audit-modal.component';
import { realizarSolicitudGet } from 'src/app/services/api/Tools';
import { BarAudit } from 'src/app/services/api/BarAudit.model';
import { BarBottle } from 'src/app/services/api/BarBottle.model';
import { Bottle } from 'src/app/services/api/Bottle.model';
import { convertirAOzString } from 'src/app/services/api/const.api';
@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  constructor(private pageTitleService:PagetitleService, public dialog: MatDialog){}


  openDialog(): void{
    this.dialog.open(AudittypeModalComponent,{
      width:'41.875rem', height:'27.25rem'
    });
    this.dialog.afterAllClosed.subscribe(()=>{
      this.obtenerDatos();
    });
  }

  closeModal(){

  }

  barAudits: BarAudit[] | any;
  barBottle: BarBottle | undefined;
  bottle: Bottle | undefined;
  async obtenerDatos(){
    this.barAudits = (await realizarSolicitudGet("/barAudit", "?$expand=Bar,BarBottle($expand=Bottle)&$orderby=UpdatedAt desc"))["value"] as BarAudit[]
    console.log(this.barAudits)
  }

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Auditoría')
    this.obtenerDatos();
  }

  convertirAOz(num:number){
    return convertirAOzString(num);
  }

 

}
