#!/usr/bin/env node

import init from './utils/init.js';
import cli from './utils/cli.js';
import log from './utils/log.js';
import generate from './utils/generate.js';

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

async function main() {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(debug);

	await generate();
}

main();
