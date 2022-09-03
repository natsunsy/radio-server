import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'users', schema: UserSchema, collection: 'users' },
    ]),
  ],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
