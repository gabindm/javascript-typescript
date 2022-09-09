import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://gndm:test@cluster0.taqpuxb.mongodb.net/test',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
