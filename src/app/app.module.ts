import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './general/first/first.component';
import { TabsComponent } from './general/tabs/tabs.component';
import { ContentComponent } from './general/content/content.component';
import { HeaderComponent } from './general/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TabsComponent,
    ContentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
