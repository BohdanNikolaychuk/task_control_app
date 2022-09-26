import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BoardComponent } from './pages/board/board.component';
import { PathNotFoundComponent } from './pages/path-not-found/path-not-found.component';
import { HeaderComponent } from './features/header/header.component';
import { ButtonModule } from './shared/button/button.module';
import { NewDashboardsComponent } from './pages/new-dashboards/new-dashboards.component';
import { NewBoardsComponent } from './pages/new-boards/new-boards.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardComponent,
    PathNotFoundComponent,
    HeaderComponent,
    NewDashboardsComponent,
    NewBoardsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
