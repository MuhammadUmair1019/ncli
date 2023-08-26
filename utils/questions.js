import ask from './ask.js';

export default async function questions() {
	const name = await ask({ name: `name`, message: `ClI name?`, hint: `(use kebab case only)` });
	const command = await ask({
		name: `command`,
		message: `ClI command?`,
		hint: `(optional: if different from the CLI name)`,
		initial: name
	});
	const description = await ask({ name: `description`, message: `ClI description?` });
	const version = await ask({ name: `version`, message: `ClI version?`, initial: `0.0.1` });
	const license = await ask({ name: `license`, message: `ClI license?`, initial: `UNLICENSED` });
	const authorName = await ask({ name: `authorName`, message: `ClI authorName?` });
	const authorEmail = await ask({ name: `authorEmail`, message: `ClI authorEmail?` });
	const authorUrl = await ask({ name: `authorUrl`, message: `ClI author URL?` });

	const vars = {
		name,
		command,
		description,
		version,
		license,
		authorName,
		authorEmail,
		authorUrl
	};

	return vars;
}
