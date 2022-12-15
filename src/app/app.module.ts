import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';

import { AppComponent } from './app.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CockpitComponent,
    ServerElementComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
