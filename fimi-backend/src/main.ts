import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import * as morgan from 'morgan'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'

import { AppModule } from '@/app.module'
import { SystemConfigDataType } from '@/libs/configuration/data/types'
import { LoggerService } from '@/libs/logging/services/logger.service'
import { apiDocPlugin } from '@/libs/plugins/api-docs.plugin'

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		rawBody: true
	})

	const configService = app.get(ConfigService)

	const logger = app.get(WINSTON_MODULE_NEST_PROVIDER)

	const { port, apiPrefix, isDev, host, nodeEnv } =
		configService.get<SystemConfigDataType>('system')

	const loggerService = app.get(LoggerService)

	app.useLogger(logger)

	app.enableCors({
		credentials: true,
		origin: '*'
	})

	app.use(cookieParser())

	app.setGlobalPrefix(apiPrefix)

	apiDocPlugin(app)

	app.use(
		morgan(':method :url :status :res[content-length] - :response-time ms', {
			stream: {
				write: msg => loggerService.http(msg)
			}
		})
	)

	await app.listen(port)

	if (isDev) {
		loggerService.info(`Server (${nodeEnv}) running on: ${host}:${port}`)
		loggerService.info(
			`Api doc (${nodeEnv}) running on: ${host}:${port}/api-docs`
		)
	}
}

bootstrap()
