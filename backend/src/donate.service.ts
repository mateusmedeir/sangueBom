import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Donate, Prisma } from '@prisma/client';

@Injectable()
export class DonateService {
  constructor(private prisma: PrismaService) { }

  async donate(donateWhereUniqueInput: string): Promise<Donate | null> {
    return this.prisma.donate.findFirst({ where: { id: donateWhereUniqueInput } });
  }

  async findAllDonates(): Promise<Donate[]> {
    const donates = await this.prisma.donate.findMany();
    return donates;
  }

  async createDonate(data: Prisma.DonateUncheckedCreateInput): Promise<Donate> {
    return this.prisma.donate.create({
      data,
    });
  }

  async updateDonate(params: {
    where: Prisma.DonateWhereUniqueInput;
    data: Prisma.DonateUncheckedUpdateInput;
  }): Promise<Donate> {
    const { data, where } = params;
    return this.prisma.donate.update({
      data,
      where,
      include: {
        Patient: true
      }
    });
  }

}
