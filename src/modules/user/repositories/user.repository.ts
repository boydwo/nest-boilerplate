import { EntityRepository, Repository } from 'typeorm';
import CreateUserDto from '../dtos/create-user.dto';
import { v4 as uuidV4 } from 'uuid';
import { UserEntity } from '../entities/user.entity';
import { IUserRepository } from './iuser.interface';

@EntityRepository(UserEntity)
export class UserRepository
  extends Repository<UserEntity>
  implements IUserRepository
{
  async createUser(user: CreateUserDto): Promise<UserEntity> {
    const userEntity = new UserEntity();
    userEntity.id = uuidV4();
    userEntity.name = user.name;
    userEntity.email = user.email;
    userEntity.phone = user.phone;
    userEntity.password = user.password;
    userEntity.document = user.document;

    await userEntity.save();
    return userEntity;
  }
}
