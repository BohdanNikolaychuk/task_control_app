import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BoardComponent } from './pages/board/board.component';
import { PathNotFoundComponent } from './pages/path-not-found/path-not-found.component';
import { HeaderComponent } from './features/header/header.component';
import { ButtonModule } from './shared/button/button.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardComponent,
    PathNotFoundComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
