import { configurationSchema } from '@/libs/configuration/configuration.schema'

export const validate = (config: Record<string, unknown>) => {
	const validated = configurationSchema.safeParse(config)

	if (validated.success) {
		return validated.data
	}

	if (validated.error) {
		throw new Error(validated.error.toString())
	}
}
