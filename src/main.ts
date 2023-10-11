import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { crearDB } from './app/services/api/DBLocal';
import { abrirConfiguracion } from './app/services/api/Configuracion.service';

crearDB();
abrirConfiguracion();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
