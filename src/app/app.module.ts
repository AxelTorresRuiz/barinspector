import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router'
import * as signalR from '@microsoft/signalr';
import { NgChartsModule } from 'ng2-charts';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { MybarComponent } from './components/pages/mybar/mybar.component';
import { AuditComponent } from './components/pages/audit/audit.component';
import { ManagersComponent } from './components/pages/managers/managers.component';
import { ReportComponent } from './components/pages/report/report.component';
import { CatalogueComponent } from './components/pages/catalogue/catalogue.component';

//Rutas
import { APP_ROUTING } from './app.routes';
import { ConfigurationComponent } from './components/pages/configuration/configuration.component';
import { PagetitleService } from './services/pagetitle.service';
import { BasculaService } from './services/bascula.service';
import { CatalogueModalComponent } from './components/modals/catalogue-modal/catalogue-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewbarModalComponent } from './components/modals/newbar-modal/newbar-modal.component';
import { AddbottleComponent } from './components/pages/addbottle/addbottle.component';
import { AddmanagerComponent } from './components/pages/addmanager/addmanager.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MybarComponent,
    AuditComponent,
    ManagersComponent,
    ReportComponent,
    CatalogueComponent,
    ConfigurationComponent,
    CatalogueModalComponent,
    NewbarModalComponent,
    AddbottleComponent,
    AddmanagerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    NgChartsModule

  ],
  providers: [
    PagetitleService,
    BasculaService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }