import path from 'path';
import { fileURLToPath } from 'url';
import { execa } from 'execa';
import ora from 'ora'
import copy from 'copy-template-dir';
import chalk from 'chalk';
import alert from 'alerta-cli';

import questions from './questions.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const g = chalk.green;
const d = chalk.dim;
const y = chalk.yellow;
const spinner = ora({ text: '' })

export default async function generate() {
	try {
		const vars = await questions();

		const outDir = vars.name;
		const inDirPath = path.join(__dirname, '../template');
		const outDirPath = path.join(process.cwd(), outDir);

		copy(inDirPath, outDirPath, vars, async (err, createdFiles) => {
			if (err) throw err;

			console.log(`\nCreated files in ${g(`./${outDir}`)} directory:\n`);

			createdFiles.forEach(filePath => {
				const fileName = path.basename(filePath);
				console.log(`${g(`CREATED`)}: ${fileName}`);
			});

			console.log();
			spinner.start(`${y(`DEPENDENCIES`)} installing...\n\n${d(`It may take a moment`)}`)
			process.chdir(outDirPath);
			const pkgs = [
				'meow',
				'chalk',
				'alerta-cli',
				'cli-handle-error',
				'cli-handle-unhandled',
				'cli-meow-help',
				'cli-welcome',
			]

			await execa(`npm`, [`install`, ...pkgs]);
			await execa(`npm`, [`install`, `prettier`, '-D']);
			await execa(`npm`, [`dedupe`]);
			spinner.succeed(`${g(`DEPENDENCIES`)} installed!`)

			alert({
				type: `success`,
				name: `All Done!`,
				msg: `\n\n${createdFiles.length} files created in ${d(`./${outDir}`)} directory`
			});
		});
	} catch (error) {
		console.error('An error occurred:', error);
		process.exit = 1;
	}
}
