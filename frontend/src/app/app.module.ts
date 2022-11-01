import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BoardComponent } from './pages/board/board.component';
import { PathNotFoundComponent } from './pages/path-not-found/path-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonModule } from './components/button/button.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ModalComponent } from './shared/modal/modal.component';
import { InputComponent } from './shared/input/input.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { SortPipe } from './core/pipes/sort.pipe/sort.pipe';
import { FilterPipe } from './core/pipes/filter.pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardComponent,
    PathNotFoundComponent,
    HeaderComponent,
    ModalComponent,
    InputComponent,
    LoginComponent,
    RegisterComponent,
    SortPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor,
    },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
