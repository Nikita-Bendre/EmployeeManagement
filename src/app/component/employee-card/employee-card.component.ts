import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../employee.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {

  @Input() employee!: Employee;
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() view = new EventEmitter<number>();

  filteredEmployees: Employee[] = [];

  onEdit() {
    this.edit.emit(this.employee.id);
  }

  onDelete() {
    this.delete.emit(this.employee.id);
  }

  onView() {
    this.view.emit(this.employee.id);
  }
}

