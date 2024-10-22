import { z } from 'zod'

export const configurationSchema = z.object({
	// System
	NODE_ENV: z.enum(['development', 'production', 'test', 'provision'], {
		required_error: 'NODE_ENV is required'
	}),
	PORT: z.coerce
		.number({
			required_error: 'HOST is required'
		})
		.positive({
			message: 'PORT must be positive'
		}),
	HOST: z.string({ required_error: 'HOST is required' }),
	API_PREFIX: z.string({ required_error: 'API_PREFIX is required' }),

	// Database
	DATABASE_URL: z.string({ required_error: 'DATABASE_URL is required' }),
	DATABASE_HOST: z.string({ required_error: 'DATABASE_HOST is required' }),
	DATABASE_PORT: z.coerce
		.number({ required_error: 'DATABASE_PORT is required' })
		.positive({ message: 'DATABASE_PORT must be positive' }),
	DATABASE_USERNAME: z.string({
		required_error: 'DATABASE_USENAME is required'
	}),
	DATABASE_PASSWORD: z.string({
		required_error: 'DATABASE_PASSWORD is required'
	}),
	DATABASE_NAME: z.string({ required_error: 'DATABASE_NAME is required' })
})
