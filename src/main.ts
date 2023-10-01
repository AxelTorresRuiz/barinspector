import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { crearDB } from './app/services/api/DBLocal';

crearDB()

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
