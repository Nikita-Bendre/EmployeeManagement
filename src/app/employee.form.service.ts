import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeForm!: FormGroup
  departments = ['HR', 'Engineering', 'Fianance'];

  constructor(private formobj: FormBuilder) {

    // this.employeeForm = this.formobj.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   department: ['', Validators.required],
    //   joiningDate: ['', Validators.required]
    // });
  }

  buildForm(data?: any): FormGroup {
    return this.formobj.group({
      name: [data?.name || '', Validators.required],
      email: [data?.email || '', [Validators.required, Validators.email]],
      department: [data?.department || '', Validators.required],
      joiningDate: [data?.joiningDate || '', Validators.required],
    });
  }

  private _employees = new BehaviorSubject<Employee[]>([
      {
        id: 1,
        name: 'Nikita',
        email: 'nikita@gmail.com',
        department: 'HR',
        joiningDate: '10 jan 2024',
      },
      {
        id: 2,
        name: 'Pratiksha',
        email: 'pratiksha@gmail.com',
        department: 'Engineering',
        joiningDate: '25 april 2022',
      },
    ]);
  
    private idCounter = 3;
  
    getEmployees(): Observable<Employee[]> {
      return this._employees.asObservable();
    }
  
    getEmployeeById(id: number): Observable<Employee | undefined> {
      return this._employees.pipe(
        map((employees) => employees.find((emp) => emp.id === id))
      );
    }
  
    addEmployee(employee: Omit<Employee, 'id'>): void {
      const current = this._employees.value;
      const newEmployee: Employee = { id: this.idCounter++, ...employee };
      this._employees.next([...current, newEmployee]);
    }
  
    updateEmployee(id: number, updated: Partial<Employee>): void {
      const current = this._employees.value.map((emp) =>
        emp.id === id ? { ...emp, ...updated } : emp
      );
      this._employees.next(current);
    }

    deleteEmployee(id: number): void {
      const filtered = this._employees.value.filter((emp) => emp.id !== id);
      this._employees.next(filtered);
    }
}
