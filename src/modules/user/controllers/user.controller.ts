import { Body, Controller, Post } from '@nestjs/common';
import CreateUserDto from '../dtos/create-user.dto';
import { CreateUserService } from '../services/create-user.service';

@Controller('user')
export class UserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  public async createSchool(@Body() user: CreateUserDto) {
    return await this.createUserService.execute(user);
  }
}
