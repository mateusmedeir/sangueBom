import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Patient, Prisma } from '@prisma/client';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}

  async patient(patientWhereUniqueInput:string): Promise<Patient | null> {
		return this.prisma.patient.findFirst({where: { id: patientWhereUniqueInput}});
	}

	async findAllPatients(): Promise<Patient[]> {
    const patients = await this.prisma.patient.findMany();
    return patients;
  }

	async createPatient(data: Prisma.PatientCreateInput): Promise<Patient> {
		return this.prisma.patient.create({
			data,
		});
  }
}
