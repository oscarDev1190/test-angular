import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

console.log("f1");
console.log("f3");

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
