import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewbarModalComponent } from '../../modals/newbar-modal/newbar-modal.component';
import { Router } from '@angular/router';
import { barGet, barPost, limpiraYGuardarBarraActiva, obtenerBarraActiva } from "../../../services/api/Bar.service";
import { Bar } from 'src/app/services/api/Bar.model';
import { db } from 'src/app/services/api/DBLocal';
import { reload } from 'src/app/services/api/Tools';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor(private pageTitleService: PagetitleService, public dialog: MatDialog, private router: Router) { }

  inputDisabled: boolean = false;

  divs: Array<{ barName: string, checked: boolean }> = [];

  selection: boolean[] = [];

  toggleInput() {
    this.inputDisabled = !this.inputDisabled;
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
      this.actualizarBarras();
    });
  }

  moveadd() {
    this.router.navigate(['/addbottle'])
  }
  async actualizarBarras() {
    this.barras = await barGet() as Bar[];
  }
  barraActiva: Bar = {Id:-1, Name:"Seleciona una Barra"};
  barras: Bar[] = [];

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Configuración')
    this.actualizarBarras().then(() => {
      this.selection = Array(this.barras.length).fill(false);
      obtenerBarraActiva().then((r) => {
        this.barraActiva = r as Bar;
        this.cualBarra();
      }).catch(()=>{
        console.log("No hay ninguna barra activa");
      });
    });
  }
  cualBarra() {
    this.selection.fill(false);
    var indice = this.barras.findIndex(fila => fila.Id == this.barraActiva.Id);
    if (indice >= 0) {
      this.selection[indice] = true;
    }
  }

  async seleccionarBarra(indice: number) {
    this.selection.fill(false);
    this.selection[indice] = true;
    await limpiraYGuardarBarraActiva(this.barras[indice]);
    this.barraActiva = this.barras[indice];
    reload();
  }

  viewcatalogue() {
    this.router.navigate(['/catalogue'], { queryParams: { view: "true" } }); 
  }
}
