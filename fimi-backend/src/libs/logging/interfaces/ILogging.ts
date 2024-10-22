export interface ILogging {
	error(message: string, stack?: string): void
	warn(message: string): void
	info(message: string): void
	debug(message: string): void
	http(message: string): void
	verbose(message: string): void
	input(message: string): void
	silly(message: string): void
	data(message: string): void
	help(message: string): void
	prompt(message: string): void
	emerg(message: string): void
	alert(message: string): void
	crit(message: string): void
	notice(message: string): void
}
