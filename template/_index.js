#!/usr/bin/env node

/**
 * {{name}}
 * {{description}}
 *
 * @author {{authorName}} <{{authorUrl}}>
 */

import init from '../utils/init';
import cli from './utils/cli';
import log from './utils/log';

const input = cli.input;
const flags = cli.flags;

const { clear, debug } = flags;

(() => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	// debug
	debug && log(flags);
})();
