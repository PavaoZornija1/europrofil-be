import { Injectable } from '@nestjs/common';
import { CreateMechanismDto } from './dto/create-mechanism.dto';
import { UpdateMechanismDto } from './dto/update-mechanism.dto';

export const mechanism = [
  {
    id: 1,
    src: '/images/EP10.webp',
    alt: 'Picture 1',
    title: 'Mehanizam EP 10 nosivosti od 25kg do 70kg',
    filler: 'Staklo 4mm, drvo 10 ili 18mm',
    thickness: '-',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 2,
    src: '/images/EP18.webp',
    alt: 'Picture 2',
    title: 'Mehanizam EP 18 N nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '-',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 3,
    src: '/images/EP04.webp',
    alt: 'Picture 3',
    title: 'Mehanizam EP 04 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 10 ili 18mm',
    thickness: '-',
    doorWidth: '50cm - 120cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 4,
    src: '/images/PKM80.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 5,
    src: '/images/EP18.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 6,
    src: '/images/PKM80.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 7,
    src: '/images/EP10.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 8,
    src: '/images/PKM80.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 9,
    src: '/images/EP18.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 10,
    src: '/images/EP10.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 11,
    src: '/images/PKM80.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 12,
    src: '/images/EP18.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
];

@Injectable()
export class MechanismsService {
  create(createMechanismDto: CreateMechanismDto) {
    return 'This action adds a new mechanism';
  }

  findAll() {
    return mechanism;
  }

  findOne(id: number) {
    return mechanism.find((el) => el.id == id);
  }

  update(id: number, updateMechanismDto: UpdateMechanismDto) {
    return `This action updates a #${id} mechanism`;
  }

  remove(id: number) {
    return `This action removes a #${id} mechanism`;
  }
}
