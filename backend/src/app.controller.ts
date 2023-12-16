import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Req,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { DonateService } from './donate.service';
import { PatientService } from './patient.service';
import { User as UserModel, Donate as DonateModel, Patient as PatientModel, Prisma, User } from '@prisma/client';
import { from } from 'rxjs';
const CryptumSDK = require('cryptum-sdk')
const protocol = 'POLYGON'
import createNft = require('./nft.js')

const sdk = new CryptumSDK({
  environment: "testnet", // 'testnet' or 'development', 'mainnet' or 'production'
  apiKey: '0x1a99233b5c48a7245b6911f6eb8ef5e7ddcfb313e896684ba52c2a42630166a1',
})
const wallet = require("./wallet.json")

@Controller()
export class AppController {
  constructor(
    private userService: UserService,
    private donateService: DonateService,
    private patientService: PatientService
  ) { }

  @Get("/donations")
  async getAllDonate(): Promise<DonateModel[]> {
    return this.donateService.findAllDonates();
  }

  @Get('donate/:id')
  async getDonateById(@Param('id') id: string): Promise<DonateModel | null> {
    return this.donateService.donate(id);
  }

  @Post('donate')
  async signupDonate(
    @Body() donateData: { blood_type: string, email: string },
  ): Promise<DonateModel> {
    const user = await this.userService.findUserByEmail({ email: donateData.email });
    if (!user) {
      throw new NotFoundException('User not found!');
    }

    const newDonate = await this.donateService.createDonate({
      blood_type: donateData.blood_type,
      userId: user.id,
    });

    return newDonate;
  }
  @Put('donate/:id')
  async donated(
    @Param('id') id: string,
    @Body() donateData: { patient_id: Prisma.DonateWhereUniqueInput },
  ): Promise<DonateModel> {
    const donation = await this.donateService.donate(id)
    if (!donation){
      throw new NotFoundException('Donation not found!');
    }
    const patient = await this.patientService.patient(donateData.patient_id.id);
    if (!patient) {
      throw new NotFoundException('Patient not found!');
    }

    const updateDonation = await this.donateService.updateDonate({
      where: {
      id: id,
      },
      data: {
        state: true,
      },

    });
    createNft()
    return updateDonation;
  }

  @Get("/users")
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.findAllUsers();
  }

  @Get('user/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel | null> {
    return this.userService.user(id);
  }

  @Post('user')
  async signupUser(
    @Body() userData: { name: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }


  @Get("/patients")
  async getAllPatients(): Promise<PatientModel[]> {
    return this.patientService.findAllPatients();
  }

  @Get('patient/:id')
  async getPatientById(@Param('id') id: string): Promise<PatientModel | null> {
    return this.patientService.patient(id);
  }

  @Post('patient')
  async signupPatient(
    @Body() patientData: { name: string, blood_type: string },
  ): Promise<PatientModel> {
    return this.patientService.createPatient(patientData);
  }

}
