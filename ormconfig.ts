import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { configService } from './src/infra/typeorm/config';


 const configORM: TypeOrmModuleOptions = configService.getTypeOrmConfig() ;
 export = configORM
