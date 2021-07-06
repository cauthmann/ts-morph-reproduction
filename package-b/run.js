
const { Project } = require('ts-morph');

const project = new Project({
	skipAddingFilesFromTsConfig: false,
	tsConfigFilePath: './tsconfig.json',
});

console.log('Source files', project.getSourceFiles().map((f) => f.getFilePath()));
