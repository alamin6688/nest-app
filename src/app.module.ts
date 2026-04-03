import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { EmployeeModule } from './employee/employee.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';

@Module({
  imports: [UserModule, ProductModule, EmployeeModule, StudentModule, CustomerModule],
  controllers: [AppController, ProductController, MynameController],
  providers: [AppService, ProductService],
})
export class AppModule {}
