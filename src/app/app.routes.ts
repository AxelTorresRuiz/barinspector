import { Component } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { MybarComponent } from './components/pages/mybar/mybar.component';
import { AuditComponent } from './components/pages/audit/audit.component';
import { ReportComponent } from './components/pages/report/report.component';
import { ManagersComponent } from './components/pages/managers/managers.component';
import { ConfigurationComponent } from './components/pages/configuration/configuration.component';
import { CatalogueComponent } from './components/pages/catalogue/catalogue.component';
import { CatalogueModalComponent } from './components/modals/catalogue-modal/catalogue-modal.component';
import { AddbottleComponent } from './components/pages/addbottle/addbottle.component';
import { AddmanagerComponent } from './components/pages/addmanager/addmanager.component';
import { ConfigureScaleComponent } from './components/pages/configure-scale/configure-scale.component';
const APP_ROUTES: Routes = [
  {path:'addmanager',component:AddmanagerComponent},
  {path:'addbottle',component:AddbottleComponent},
  {path:'catalogue/add',component:CatalogueModalComponent},
  {path:'catalogue',component:CatalogueComponent},
  {path:'configuration',component:ConfigurationComponent},
  {path:'managers',component:ManagersComponent},
  {path:'reports',component:ReportComponent},
  {path:'audit',component:AuditComponent},
  {path: 'mybar',component:MybarComponent},
  {path: 'home', component: Component},
  {path: 'configureScale', component: ConfigureScaleComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'mybar'}
];
export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES)
