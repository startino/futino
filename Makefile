env:
	echo APP=$(APP) > .env.temp.local

env.del:
	rm ./.env.temp.local

build:
	make env
	sudo docker-compose -f compose.dev.yaml --env-file ./.env.temp.local build
	make env.del
	
rebuild:
	make env
	sudo docker-compose -f compose.dev.yaml --env-file ./.env.temp.local build --no-cache
	make env.del

up:
	make env
	sudo docker-compose -f compose.dev.yaml --env-file ./.env.temp.local up
	make env.del

down:
	make env
	sudo docker-compose -f compose.dev.yaml --env-file ./.env.temp.local down
	make env.del
