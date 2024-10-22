import 'winston-daily-rotate-file'

import { Module } from '@nestjs/common'
import { WinstonModule } from 'nest-winston'

import { LoggerService } from '@/libs/logging/services/logger.service'
import { WinstonService } from '@/libs/logging/services/winston.service'

@Module({
	imports: [
		WinstonModule.forRootAsync({
			useClass: WinstonService
		})
	],
	providers: [LoggerService, WinstonService],
	exports: [LoggerService]
})
export class LoggingModule {}
