import { Injectable } from '@nestjs/common';
import { CreateHandrailDto } from './dto/create-handrail.dto';
import { UpdateHandrailDto } from './dto/update-handrail.dto';

@Injectable()
export class HandrailsService {
  create(createHandrailDto: CreateHandrailDto) {
    return 'This action adds a new handrail';
  }

  findAll() {
    return [];
  }

  findOne(id: number) {
    return `This action returns a #${id} handrail`;
  }

  update(id: number, updateHandrailDto: UpdateHandrailDto) {
    return `This action updates a #${id} handrail`;
  }

  remove(id: number) {
    return `This action removes a #${id} handrail`;
  }
}
