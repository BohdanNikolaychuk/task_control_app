import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BoardComponent } from './pages/board/board.component';
import { PathNotFoundComponent } from './pages/path-not-found/path-not-found.component';
import { HeaderComponent } from './features/header/header.component';
import { ButtonModule } from './shared/button/button.module';

import { ModalComponent } from './shared/modal/modal.component';
import { InputComponent } from './shared/input/input.component';
import { FilterPipe } from './core/pipes/filter.pipe';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardComponent,
    PathNotFoundComponent,
    HeaderComponent,
    ModalComponent,
    InputComponent,
    FilterPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
