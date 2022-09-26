import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './pages/board/board.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewBoardsComponent } from './pages/new-boards/new-boards.component';
import { NewDashboardsComponent } from './pages/new-dashboards/new-dashboards.component';
import { PathNotFoundComponent } from './pages/path-not-found/path-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboards',
    pathMatch: 'full',
  },
  { path: 'dashboards', component: DashboardComponent },
  { path: 'dashboards/:dashId/boards', component: BoardComponent },
  { path: 'new-dash', component: NewDashboardsComponent },
  { path: 'dashboards/:dashId/new-board', component: NewBoardsComponent },
  { path: '**', component: PathNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
