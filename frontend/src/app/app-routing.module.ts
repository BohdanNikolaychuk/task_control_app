import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './pages/board/board.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewDashboardsComponent } from './pages/new-dashboards/new-dashboards.component';
import { PathNotFoundComponent } from './pages/path-not-found/path-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboards',
    pathMatch: 'full',
  },
  { path: 'dashboards', component: DashboardComponent },
  { path: 'dashboards/:id/board', component: BoardComponent },
  { path: 'new-dash', component: NewDashboardsComponent },
  { path: '**', component: PathNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
