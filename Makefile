#
# Makefile for brain-games
#

install:
	sudo npm install

start:
	npm run babel-node -- 'src/bin/brain-games.js'
