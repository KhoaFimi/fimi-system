import { Inject, Injectable } from '@nestjs/common'
import { WinstonModuleOptions, WinstonModuleOptionsFactory } from 'nest-winston'
import * as path from 'path'
import * as winston from 'winston'

import { systemConfigData } from '@/libs/configuration/data/system-config.data'
import { SystemConfigDataType } from '@/libs/configuration/data/types'

@Injectable()
export class WinstonService implements WinstonModuleOptionsFactory {
	constructor(
		@Inject(systemConfigData.KEY)
		private readonly systemConfig: SystemConfigDataType
	) {}

	private levels: Record<string, number> = {
		error: 0,
		warn: 1,
		info: 2,
		debug: 3,
		http: 4,
		verbose: 5,
		input: 6,
		silly: 7,
		data: 8,
		help: 9,
		prompt: 10,
		emerg: 11,
		alert: 12,
		crit: 13,
		notice: 14
	}

	private colors: Record<string, string> = {
		error: 'red',
		warn: 'yellow',
		info: 'green',
		debug: 'blue',
		http: 'magenta',
		verbose: 'cyan',
		input: 'grey',
		silly: 'magenta',
		data: 'white',
		help: 'cyan',
		prompt: 'grey',
		emerg: 'red',
		alert: 'yellow',
		crit: 'red',
		notice: 'blue'
	}

	private formatConsole = winston.format.combine(
		winston.format.ms(),
		winston.format.timestamp(),
		winston.format.colorize({ all: true, colors: this.colors }),
		winston.format.printf(({ timestamp, level, message }) => {
			return `[Fimi Systen] - ${timestamp} [${level}]: ${message}`
		})
	)

	private formatFile = winston.format.uncolorize()

	private logDir = path.join(process.cwd(), 'publics', 'logs')

	public createWinstonModuleOptions(): WinstonModuleOptions {
		return {
			level: 'notice',
			levels: this.levels,
			format: this.formatConsole,
			transports: [
				new winston.transports.Console({
					level: 'data',
					format: this.formatConsole,
					silent: this.systemConfig.isProd
				}),
				new winston.transports.DailyRotateFile({
					level: 'http',
					filename: 'http-%DATE%.log',
					dirname: path.join(this.logDir, 'http'),
					format: this.formatFile,
					zippedArchive: true,
					datePattern: 'YYYY-MM-DD',
					maxFiles: '20d',
					maxSize: '30m',
					silent: this.systemConfig.isDev
				}),
				new winston.transports.DailyRotateFile({
					level: 'error',
					filename: 'error-%DATE%.log',
					dirname: path.join(this.logDir, 'error'),
					format: this.formatFile,
					zippedArchive: true,
					datePattern: 'YYYY-MM-DD',
					maxFiles: '20d',
					maxSize: '30m',
					silent: this.systemConfig.isDev
				})
			]
		}
	}
}
