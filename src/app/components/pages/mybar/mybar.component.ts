import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import { bottleGet, bottlePost, bottlePut } from 'src/app/services/api/Bottle.service'
import { Bottle } from 'src/app/services/api/Bottle.model';
import { BarBottle } from 'src/app/services/api/BarBottle.model';
import { ChartType, ChartOptions, ChartDataset } from 'chart.js';
import { barBottleGet } from 'src/app/services/api/BarBottle.service';
import { convertirAOzString } from 'src/app/services/api/const.api';
import { obtenerBarraActiva } from 'src/app/services/api/Bar.service';

@Component({
  selector: 'app-mybar',
  templateUrl: './mybar.component.html',
  styleUrls: ['./mybar.component.css']
})




export class MybarComponent implements OnInit {
  
  barBottlesYBotella: any[] = [];
  async obtenerDatosIniciales() {
    var barraActiva = await obtenerBarraActiva();
    
    var barBottles: BarBottle[] = await barBottleGet(" and BarId eq "+barraActiva.Id) as BarBottle[];
    for (var i = 0; i < barBottles.length; i++) {
      var bottle: Bottle = (await bottleGet(" and Id eq " + barBottles[i].BottleId) as Bottle[])[0];
      this.barBottlesYBotella.push({ barBottle: barBottles[i], bottle:bottle})
    }
    console.log(this.barBottlesYBotella)
    this.barBottlesYBotella=this.barBottlesYBotella;
  }
  convertirAOzString(litros:number):string{
    return convertirAOzString(litros)
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartData: ChartDataset[] = [
    {
      data: [24, 4],
      backgroundColor: ['GREEN', 'RED'],
      borderColor: ['#001524', '#001524'], // Border colors for the datasets
      borderWidth: 1 // Border width in pixels
    },
  ];
  public pieChartType: ChartType = 'pie';




  constructor(private pageTitleService: PagetitleService, private router: Router) {
  }

  agregar() {
    this.router.navigate(['/catalogue'])
  }

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Mi barra')
    this.obtenerDatosIniciales();
  }

  //regresa cuanta cantidad hay dispoblible, por ejemplo si todas las botellas estan llenas retorna 1 (100%) caso opuesto 0 (0%)
  calcularDecimalDeDisponible(BarBottleYBotella:any[any]){
    return (BarBottleYBotella.barBottle.CurrentWeight-(BarBottleYBotella.bottle.EmptyBottleWeight*BarBottleYBotella.barBottle.NumOfBottles))
      /
    (BarBottleYBotella.barBottle.NumOfBottles*(BarBottleYBotella.bottle.FullBottleWeight-BarBottleYBotella.bottle.EmptyBottleWeight));
  }

}
