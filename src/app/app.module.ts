import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientBannerComponent } from './components/layout/client-banner/client-banner.component';
import { ClientFooterComponent } from './components/layout/client-footer/client-footer.component';
import { ClientLayoutComponent } from './components/layout/client-layout/client-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientBannerComponent,
    ClientFooterComponent,
    ClientLayoutComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
