install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even

brain-calc:
	node bin/brain-calc

publish:
	npm publish --dry-run

lint:
	npx eslint .
