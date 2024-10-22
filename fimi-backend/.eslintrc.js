module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module'
	},
	plugins: [
		'@typescript-eslint/eslint-plugin',
		'prettier',
		'import',
		'simple-import-sort'
	],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier'
	],
	root: true,
	env: {
		node: true,
		jest: true
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				args: 'all',
				argsIgnorePattern: '^_',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				ignoreRestSiblings: true
			}
		],
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'prettier/prettier': [
			'error',
			{
				arrowParens: 'avoid',
				useTabs: true,
				tabWidth: 2,
				printWidth: 80,
				bracketSameLine: false,
				bracketSpacing: true,
				endOfLine: 'lf',
				semi: false,
				trailingComma: 'none',
				singleAttributePerLine: true,
				singleQuote: true,
				quoteProps: 'as-needed',
				proseWrap: 'preserve'
			}
		]
	}
}
