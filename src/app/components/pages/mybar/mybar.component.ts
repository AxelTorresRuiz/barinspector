import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import { SignalRService } from 'src/app/services/Bascula';


@Component({
  selector: 'app-mybar',
  templateUrl: './mybar.component.html',
  styleUrls: ['./mybar.component.css']
})
export class MybarComponent implements OnInit {

  constructor(private pageTitleService:PagetitleService, private router:Router, private signalRService: SignalRService){

  }

  agregar(){
    this.router.navigate(['/catalogue'])
  }

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Mi barra');
    this.signalRService.startConnection();
  }

}
