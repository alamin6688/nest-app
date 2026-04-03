import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  private readonly employees = [
    { id: 1, name: 'Alamin', salary: 20000 },
    { id: 2, name: 'Nahid', salary: 30000 },
    { id: 3, name: 'Srabon', salary: 60000 },
  ];

  getAllEmployees() {
    return this.employees;
  }

  getemployeesById(id: number) {
    return this.employees.find((e) => e.id === id);
  }
}
