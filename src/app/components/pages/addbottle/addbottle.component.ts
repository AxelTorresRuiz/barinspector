import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';


@Component({
  selector: 'app-addbottle',
  templateUrl: './addbottle.component.html',
  styleUrls: ['./addbottle.component.css']
})
export class AddbottleComponent implements OnInit {
  constructor(private pagetitleservice:PagetitleService){}

  ngOnInit(): void {
    this.pagetitleservice.setPageTitle('Añadir Botella')
  }

}
