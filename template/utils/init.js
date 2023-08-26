import welcome from 'cli-welcome';
import unhandled from 'cli-handle-unhandled';

function init({ clear }) {
	unhandled();
	welcome({
		title: '{{name}}',
		tagLine: `by {{authorName}}`,
		description: '{{description}}',
		version: '{{version}}',
		bgColor: `#0a66c2`,
		color: `#000000`,
		bold: true,
		clear
	});
}

export default init;
