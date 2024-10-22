import { Controller, Get } from '@nestjs/common'

import { LoggerService } from '@/libs/logging/services/logger.service'

import { AppService } from './app.service'

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		private readonly logger: LoggerService
	) {}

	@Get()
	getHello(): IResponse<string> {
		return {
			message: 'Test interceptor',
			data: this.appService.getHello()
		}
	}
}
