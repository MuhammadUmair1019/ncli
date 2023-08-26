import meow from 'meow';
import meowHelp from 'cli-meow-help';

const flags = {
	clear: {
		type: 'boolean',
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	debug: {
		type: 'boolean',
		default: false,
		alias: 'd',
		desc: `Print debug info`
	},
	version: {
		type: 'boolean',
		default: false,
		alias: 'v',
		desc: `Print CLI version`
	}
};

const commands = {
	help: {
		desc: `Print the help`
	}
};

const helpText = meowHelp({
	name: `ncli`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	importMeta: import.meta
};

export default meow(helpText, options);
