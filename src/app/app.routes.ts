import { Routes } from '@angular/router';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './component/employee-create/employee-create.component';
import { EmployeeEditComponent } from './component/employee-edit/employee-edit.component';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ToastalertComponent } from './component/toastalert/toastalert.component';

export const routes: Routes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/create', component: EmployeeCreateComponent },
    { path: 'employees/edit/:id', component: EmployeeEditComponent },
    { path: 'employees/:id', component: EmployeeDetailsComponent }, 
    { path: '**', component : NotFoundComponent }, 
    { path: 'toastr', component: ToastalertComponent}
];
