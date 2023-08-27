#!/usr/bin/env node

/**
 * {{name}}
 * {{description}}
 *
 * @author {{authorName}} <{{authorUrl}}>
 */

import init from './utils/init.js';
import cli from './utils/cli.js';
import log from './utils/log.js';

const input = cli.input;
const flags = cli.flags;

const { clear, debug } = flags;

(() => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	// debug
	debug && log(flags);
})();
