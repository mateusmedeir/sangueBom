import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { PatientService } from './patient.service';
import { UserService } from './user.service';
import { DonateService } from './donate.service';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService, PatientService, UserService, DonateService],
})
export class AppModule {}
