#
# Makefile for brain-games
#

install:
	sudo yarn

start:
	npm run babel-node -- 'src/bin/brain-games.js'

publish:
	npm publish

lint:
	npm run eslint

check-types:
	npm run flow
