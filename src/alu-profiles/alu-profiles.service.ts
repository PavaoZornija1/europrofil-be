import { Injectable } from '@nestjs/common';
import { CreateAluProfileDto } from './dto/create-alu-profile.dto';
import { UpdateAluProfileDto } from './dto/update-alu-profile.dto';

@Injectable()
export class AluProfilesService {
  create(createAluProfileDto: CreateAluProfileDto) {
    return 'This action adds a new aluProfile';
  }

  findAll() {
    return `This action returns all aluProfiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aluProfile`;
  }

  update(id: number, updateAluProfileDto: UpdateAluProfileDto) {
    return `This action updates a #${id} aluProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} aluProfile`;
  }
}
