import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException,
	Inject
} from '@nestjs/common'
import { Response } from 'express'

import { systemConfigData } from '@/libs/configuration/data/system-config.data'
import { SystemConfigDataType } from '@/libs/configuration/data/types'

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
	constructor(
		@Inject(systemConfigData.KEY)
		private readonly systemConfig: SystemConfigDataType
	) {}

	catch(exception: any, host: ArgumentsHost) {
		const ctx = host.switchToHttp()

		const response = ctx.getResponse<Response>()

		const status =
			exception instanceof HttpException ? exception.getStatus() : 500

		const message =
			exception instanceof HttpException
				? exception.message
				: 'Internal server error'

		response.status(status).json({
			statusCode: status,
			message,
			error: !this.systemConfig.isProd
				? {
						response: exception.response,
						stack: exception.stacl
					}
				: null
		})
	}
}
