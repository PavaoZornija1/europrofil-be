import { Module } from '@nestjs/common';
import { AluDepartmentsService } from './alu-departments.service';
import { AluDepartmentsController } from './alu-departments.controller';

@Module({
  controllers: [AluDepartmentsController],
  providers: [AluDepartmentsService]
})
export class AluDepartmentsModule {}
