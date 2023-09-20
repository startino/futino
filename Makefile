env:
	echo "APP=$(APP)" > .env.container

env.del:
	rm ./.env.container

build:
	make env
	sudo docker-compose -f compose.dev.yaml --env-file ./.env.container build
	make env.del
	
rebuild:
	make env
	sudo docker-compose -f compose.dev.yaml --env-file ./.env.container build --no-cache
	make env.del

up:
	make env
	sudo docker-compose -f compose.dev.yaml --env-file ./.env.container up
	make env.del

down:
	make env
	sudo docker-compose -f compose.dev.yaml --env-file ./.env.container down
	make env.del
