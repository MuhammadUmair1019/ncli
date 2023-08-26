import alert from 'alerta-cli';

export default function log(info) {
	alert({
		type: `warning`,
		name: 'DEBUG LOG',
		msg: ``
	});

	console.log(info);
	console.log();
}
