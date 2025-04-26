import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../../employee.model';
import { EmployeeService } from '../../employee.form.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeCardComponent } from "../employee-card/employee-card.component";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, EmployeeCardComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employee: any;
  employees$!: Observable<Employee[]>;
  loading = true;
  searchTerm = '';
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];

  constructor(private empService: EmployeeService , private router : Router) { }


  ngOnInit(): void {
    this.employees$ = this.empService.getEmployees();
    this.employees$.subscribe((employees: Employee[]) => {
      this.employees = employees;
      this.filteredEmployees = employees;
      this.loading = false; 
    });
  }


  delete(id: number): void {
    this.empService.deleteEmployee(id);
  }

  searchEmployeeByName(searchValue : string){
    const search = searchValue.toLowerCase();
    this.filteredEmployees = this.employees.filter(emp =>
      emp.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  navigateToEdit(id: number) {
    this.router.navigate(['/employees/edit', id]);
  }
  
  navigateToView(id: number) {
    this.router.navigate(['/employees', id]);
  }
  
}
