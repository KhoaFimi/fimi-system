import { Inject, Injectable } from '@nestjs/common'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'
import { Logger } from 'winston'

import { ILogging } from '@/libs/logging/interfaces/ILogging'

@Injectable()
export class LoggerService implements ILogging {
	constructor(
		@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
	) {}

	public info(message: string): void {
		this.logger.info(message)
	}

	public error(message: string, stack?: string): void {
		this.logger.error(message, stack)
	}

	public warn(message: string): void {
		this.logger.warn(message)
	}

	public http(message: string): void {
		this.logger.http(message)
	}

	public alert(message: string): void {
		this.logger.alert(message)
	}

	public data(message: string): void {
		this.logger.data(message)
	}

	public crit(message: string): void {
		this.logger.crit(message)
	}

	public debug(message: string): void {
		this.logger.debug(message)
	}

	public emerg(message: string): void {
		this.logger.emerg(message)
	}

	public help(message: string): void {
		this.logger.help(message)
	}

	public input(message: string): void {
		this.logger.input(message)
	}

	public notice(message: string): void {
		this.logger.notice(message)
	}

	public prompt(message: string): void {
		this.logger.prompt(message)
	}

	public silly(message: string): void {
		this.logger.silly(message)
	}

	public verbose(message: string): void {
		this.logger.verbose(message)
	}
}
