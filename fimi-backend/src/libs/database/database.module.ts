import { Module } from '@nestjs/common'

import { PrismaService } from '@/libs/database/services/prisma.service'

@Module({
	providers: [PrismaService]
})
export class DatabaseModule {}
