import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export const apiDocPlugin = (app: INestApplication) => {
	const config = new DocumentBuilder()
		.setTitle('Fimi System')
		.setDescription('Fimi system api document')
		.setVersion('1.0')
		.build()

	const document = SwaggerModule.createDocument(app, config)

	SwaggerModule.setup('api-docs', app, document)
}
