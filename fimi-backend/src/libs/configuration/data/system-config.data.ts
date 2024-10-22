import { registerAs } from '@nestjs/config'

export const systemConfigData = registerAs('system', () => ({
	nodeEnv: process.env.NODE_ENV,
	isDev: process.env.NODE_ENV === 'development',
	isProd: process.env.NODE_ENV === 'production',
	isTest: process.env.NODE_ENV === 'tesing',
	port: parseInt(process.env.PORT) ?? 8080,
	host: `http://${process.env.HOST === '' ? 'localhost' : process.env.HOST}`,
	apiPrefix: process.env.API_PREFIX ?? 'api'
}))
