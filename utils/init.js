import welcome from 'cli-welcome';
import unhandled from 'cli-handle-unhandled';

function init({ clear = true }) {
	unhandled();
	welcome({
		title: 'create-nodejs-cli',
		tagLine: `by Umair.dev`,
		description: "CLI to create Node.js CLI's",
		version: '0.0.1',
		bgColor: `#0a66c2`,
		color: `#000000`,
		bold: true,
		clear
	});
}

export default init;
