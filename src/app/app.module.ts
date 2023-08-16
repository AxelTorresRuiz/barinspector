import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router'
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
import { CatalogueModalComponent } from './components/modals/catalogue-modal/catalogue-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SerialDataService } from './services/serial-data.service';
import { SerialComponent } from './components/serial/serial.component';
import { NewbarModalComponent } from './components/modals/newbar-modal/newbar-modal.component';
import { AddbottleComponent } from './components/pages/addbottle/addbottle.component';


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
    SerialComponent,
    NewbarModalComponent,
    AddbottleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [
    PagetitleService,
    SerialDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
