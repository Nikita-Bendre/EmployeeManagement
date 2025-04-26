import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../employee.form.service';
import { EmployeeFormComponent } from "../employee-form/employee-form.component";

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [EmployeeFormComponent],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent {

  employeeForm!: FormGroup 
  departments = ['Hr', 'Engineering', 'Fianance'];
  id: number;

  constructor(private route: ActivatedRoute, private empService :EmployeeService ) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
  this.empService.getEmployeeById(this.id).subscribe((emp) => {
    if (emp) this.employeeForm = this.empService.buildForm(emp);
  });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.empService.updateEmployee(this.id, this.employeeForm.value);
      console.log(this.id, this.employeeForm.value)
    } 
  }

}
