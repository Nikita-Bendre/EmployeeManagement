import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../employee.form.service';
import { EmployeeFormComponent } from "../employee-form/employee-form.component";

@Component({
  selector: 'app-employee-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, EmployeeFormComponent],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.css'
})
export class EmployeeCreateComponent {

  employeeForm: FormGroup;
  departments = ['HR', 'Engineering', 'Fianance'];

  constructor(private empService: EmployeeService) {
    this.employeeForm = this.empService.buildForm();
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.empService.addEmployee(this.employeeForm.value);
      console.log(this.employeeForm.value);
      alert("Employee Created Sucessfully");
    }
  }
}
