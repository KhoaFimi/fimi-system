import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { databaseConfigData } from '@/libs/configuration/data/database-config.data'
import { systemConfigData } from '@/libs/configuration/data/system-config.data'
import { validate } from '@/libs/configuration/utils/validate'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			cache: true,
			expandVariables: true,
			envFilePath:
				process.env.NODE_ENV !== 'production' ? '.env.local' : '.env',
			validate,
			load: [systemConfigData, databaseConfigData]
		})
	]
})
export class ConfigurationModule {}
