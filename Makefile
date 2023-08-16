install:
	npm ci

link:
	npm link

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint_fix:
	npx eslint --fix

build:
	npx webpack
