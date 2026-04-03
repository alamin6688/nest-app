import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  getStudentById(@Param('id') id: string) {
    return this.studentService.getStudentById(Number(id));
  }

  @Post()
  create(@Body() body: any) {
    return this.studentService.createstudent(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.studentService.updateStudent(Number(id), body);
  }
}
