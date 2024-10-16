import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ){}


  async create(dto: CreateUserDto) {
    const user = this.userRepository.create(dto);
    return await this.userRepository.save(user)
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }


  async findbyEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } })
  }

  update(id: number, dto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
