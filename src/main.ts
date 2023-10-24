import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MatchaModule } from './app/matcha.module';


platformBrowserDynamic().bootstrapModule(MatchaModule)
  .catch(err => console.error(err));
