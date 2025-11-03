import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { LeaveRequestComponent } from './pages/leave-request/leave-request.component';
import { DailyPunchComponent } from './pages/daily-punch/daily-punch.component';
import { SalarySlipComponent } from './pages/salary-slip/salary-slip.component';
import { LeaveRoasterComponent } from './pages/leave-roaster/leave-roaster.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'leave-request', component: LeaveRequestComponent },
      { path: 'daily-punch', component: DailyPunchComponent },
      { path: 'salary-slip', component: SalarySlipComponent },
      { path: 'leave-roaster', component: LeaveRoasterComponent }

    ]
  },

  { path: '**', redirectTo: 'login' }
];
