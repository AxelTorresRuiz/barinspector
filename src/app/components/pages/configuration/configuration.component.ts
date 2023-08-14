import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor(private pageTitleService:PagetitleService){}

  inputDisabled:boolean = false;

  toggleInput(){
    this.inputDisabled= !this.inputDisabled;
  }

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Configuración')
  }
}
