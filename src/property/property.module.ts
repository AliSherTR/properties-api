import { Module, ValidationPipe } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [PropertyController],
  // providers: [{ // using validation on module level
  //   provide: APP_PIPE,
  //   useValue: new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true
  //   })
  // }]
})
export class PropertyModule {}
