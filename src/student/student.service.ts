import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'John Doe', age: 20, course: 'Computer Science' },
    { id: 2, name: 'Jane Doe', age: 22, course: 'Mathematics' },
    { id: 3, name: 'Bob Smith', age: 21, course: 'Physics' },
  ];

  getAllStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }

  createstudent(data: any) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(id: number, data: any) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Student not found');

    // Spread the existing student data first so you don't lose any properties if 'data' is incomplete
    const result = {
      ...this.students[index],
      ...data,
      id, // ensure the original ID is kept even if 'data' tries to change it
    };

    this.students[index] = result;
    return result;
  }
}
