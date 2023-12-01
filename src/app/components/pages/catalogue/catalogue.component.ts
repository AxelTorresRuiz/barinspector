import { Component } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import {MatDialog} from '@angular/material/dialog'
import { CatalogueModalComponent } from '../../modals/catalogue-modal/catalogue-modal.component';
import { bottleGet } from 'src/app/services/api/Bottle.service';
import { barBottleGet } from 'src/app/services/api/BarBottle.service';
import { BarBottle } from 'src/app/services/api/BarBottle.model';
import { Bottle } from 'src/app/services/api/Bottle.model';
import { obtenerBarraActiva } from 'src/app/services/api/Bar.service';
import { Bar } from 'src/app/services/api/Bar.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { nullDate } from 'src/app/services/api/const.api';
import { get, makeGet, transformate, transformateArray } from 'src/app/services/api/Tools';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  [x: string]: any;

  bottles:any[] = []

  constructor(private pageTitleService:PagetitleService, public dialog: MatDialog, private route: ActivatedRoute, private router: Router){}

  edit() {
    console.log("editar");
  } 

  view:boolean|undefined;
  async obtenerParametros() { 
    var parametros = (await this.route.queryParams) as Params;
    this.view = parametros["_value"]["view"] as boolean;
}

  openModal(bottle: any){
    if(this.view != undefined){
      return;
    }
    const dialogRef = this.dialog.open(CatalogueModalComponent,{
      width:'52.875rem', height:'42.75rem',
      disableClose:true,
      data:{botellaSeleccionada:bottle}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.botellas().catch(()=>{
        this.router.navigate(["/MyBar"]);
      });
    });
  }

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Catálogo')
    this.botellas();
  }

  async botellas(){
    await this.obtenerParametros();
    var bar = await obtenerBarraActiva() as Bar;
    console.log(bar)
    if(this.view != undefined){
      this.bottles = await bottleGet() as Bottle[];
      console.log(this.bottles)
    }else{    
      this.bottles = await get("/Bottle", "/NotInUse/"+bar.Id) as any[];
      this.bottles = transformateArray(this.bottles);
      console.log(this.bottles)
    }
  }

  filterByLiquor(liquorType: string) {
    if(liquorType === 'Todos'){
      bottleGet().then((data:any)=>{
        this.bottles=data;
      });
    } else{
      bottleGet().then((data:any)=>{
        this.bottles = data.filter((bottle:any) => bottle.Liquor && bottle.Liquor.trim() === liquorType);
      })
    }
  }

}
