import { Injectable } from '@nestjs/common';
import { CreateAluOrderDto } from './dto/create-alu-order.dto';
import { UpdateAluOrderDto } from './dto/update-alu-order.dto';

@Injectable()
export class AluOrdersService {
  create(createAluOrderDto: CreateAluOrderDto) {
    return 'This action adds a new aluOrder';
  }

  findAll() {
    return `This action returns all aluOrders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aluOrder`;
  }

  update(id: number, updateAluOrderDto: UpdateAluOrderDto) {
    return `This action updates a #${id} aluOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} aluOrder`;
  }
}
