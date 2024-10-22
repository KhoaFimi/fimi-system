import { Module } from '@nestjs/common'
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core'

import { AppController } from '@/app.controller'
import { AppService } from '@/app.service'
import { ConfigurationModule } from '@/libs/configuration/configuration.module'
import { DatabaseModule } from '@/libs/database/database.module'
import { GlobalExceptionFilter } from '@/libs/filters/exception-filter/global-exception.filter'
import { ResponseInterceptor } from '@/libs/interceptor/response.interceptor'
import { LoggingModule } from '@/libs/logging/logging.module'
import { UsersModule } from '@/modules/users/users.module'

@Module({
	imports: [ConfigurationModule, LoggingModule, DatabaseModule, UsersModule],
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: APP_FILTER,
			useClass: GlobalExceptionFilter
		},
		{
			provide: APP_INTERCEPTOR,
			useClass: ResponseInterceptor
		}
	]
})
export class AppModule {}
