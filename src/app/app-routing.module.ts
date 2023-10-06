import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { IsConnectedGuard } from './guards/is-connected.guard';
import { IsAdminGuard } from './guards/is-admin.guard';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'dashboard', component: DashboardPageComponent, canActivate: [IsConnectedGuard]},
  {path: 'admin', component: AdminPageComponent, canActivate: [IsAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
