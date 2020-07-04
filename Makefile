start:
	docker-compose up -d

stop:
	$(MAKE) build
	docker-compose stop

clean:
	$(MAKE) stop
	docker-compose rm -vf

build:
	docker-compose build

apache-bash:
	docker-compose exec apache /bin/bash