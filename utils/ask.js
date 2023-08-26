import fs from 'fs'
import enquirer from 'enquirer';
import handleError from 'cli-handle-error';

async function ask({ name, message, hint, initial }) {
	try {
		const response = await enquirer.input({
			name,
			message,
			hint,
			initial,
			validate(value, state) {
				if (state && state.name === `command`) return true
				if (state && state.name === `name`) {
					if (fs.existsSync(value)) {
						return `Directoruy alreay exist: ./${value}`
					} else {
						return true
					}
				}
				return !value ? 'Please add a value' : true;
			}
		});

		return response;
	} catch (err) {
		handleError(`INPUT`, err);
		process.exit(1);
	}
}

export default ask;
