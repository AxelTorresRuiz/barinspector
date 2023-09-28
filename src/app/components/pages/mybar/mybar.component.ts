import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import { BasculaService } from 'src/app/services/bascula.service';
import { bottleGet, bottlePost, bottlePut } from 'src/app/services/api/Bottle.service'
import { Bottle } from 'src/app/services/api/Bottle.model';
import { BarBottle } from 'src/app/services/api/BarBottle.model';
import { ChartType, ChartOptions, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-mybar',
  templateUrl: './mybar.component.html',
  styleUrls: ['./mybar.component.css']
})




export class MybarComponent implements OnInit {

  public pieChartOptions: ChartOptions ={
    responsive: true,
  };
  public pieChartData: ChartDataset[]=[
    {
      data:[24,4]
    },
  ];
  public pieChartType: ChartType = 'pie';




  constructor(private pageTitleService:PagetitleService, private router:Router, private bascula: BasculaService ){
  }

  agregar(){
    this.router.navigate(['/catalogue'])
  }

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Mi barra')
    
  }


}
