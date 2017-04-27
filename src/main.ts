import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

function bootstrap() {
  platformBrowserDynamic().bootstrapModule(AppModule, {
  enableLegacyTemplate: false
});
}

if ((<any>window).webComponentsReady) {
  bootstrap();
} else {
  window.addEventListener('WebComponentsReady', bootstrap);
}
