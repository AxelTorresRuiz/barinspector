import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router'
import * as signalR from '@microsoft/signalr';
import { NgChartsModule } from 'ng2-charts';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button'
import {CalendarModule} from 'primeng/calendar'
import {DropdownModule} from 'primeng/dropdown'
import {TableModule} from 'primeng/table'

import { MybarComponent } from './components/pages/mybar/mybar.component';
import { AuditComponent } from './components/pages/audit/audit.component';
import { ManagersComponent } from './components/pages/managers/managers.component';
import { ReportComponent } from './components/pages/report/report.component';
import { CatalogueComponent } from './components/pages/catalogue/catalogue.component';

//Rutas
import { APP_ROUTING } from './app.routes';
import { ConfigurationComponent } from './components/pages/configuration/configuration.component';
import { PagetitleService } from './services/pagetitle.service';
import { CatalogueModalComponent } from './components/modals/catalogue-modal/catalogue-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewbarModalComponent } from './components/modals/newbar-modal/newbar-modal.component';
import { AddbottleComponent } from './components/pages/addbottle/addbottle.component';
import { AddmanagerComponent } from './components/pages/addmanager/addmanager.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConfigureScaleComponent } from './components/pages/configure-scale/configure-scale.component';
import { AudittypeModalComponent } from './components/modals/audittype-modal/audittype-modal.component';
import { AuditscanModalComponent } from './components/modals/auditscan-modal/auditscan-modal.component';
import { AuditModalComponent } from './components/modals/audit-modal/audit-modal.component';



@NgModule({
  declarations: [
    AppComponent,
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
    NavbarComponent,
    ConfigureScaleComponent,
    AudittypeModalComponent,
    AuditscanModalComponent,
    AuditModalComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    NgChartsModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    TableModule

  ],
  providers: [
    PagetitleService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
