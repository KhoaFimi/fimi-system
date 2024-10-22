import { registerAs } from '@nestjs/config'

export const databaseConfigData = registerAs('database', () => ({
	databaseUrl: process.env.DATABASE_URL,
	databaseHost: process.env.DATABASE_HOST,
	databasePort: parseInt(process.env.DATABASE_PORT),
	databaseUsername: process.env.DATABASE_USERNAME,
	databasePassword: process.env.DATABASE_PASSWORD,
	databaseName: process.env.DATABASE_NAME
}))
