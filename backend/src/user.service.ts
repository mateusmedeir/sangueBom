import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) { }

	async user(userWhereUniqueInput: string): Promise<User | null> {
		return this.prisma.user.findFirst({ where: { id: userWhereUniqueInput } });
	}


	async findUserByEmail(email: Prisma.UserWhereUniqueInput): Promise<User | null> {
		return this.prisma.user.findUnique({ where: email });
	}

	async findAllUsers(): Promise<User[]> {
		const users = await this.prisma.user.findMany();
		return users;
	}

	async createUser(data: Prisma.UserCreateInput): Promise<User> {
		return this.prisma.user.create({
			data,
		});
	}

}

