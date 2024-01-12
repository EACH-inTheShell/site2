IMAGE_NAME=site_eits
DOCKER_NAME=site_eits

HOST_ADDRESS=0.0.0.0:3000

.PHONY: build start dev stop remove

build:
	(docker images | tail -n +2 | awk '{print $1}' | sort | uniq | grep $(IMAGE_NAME) && docker rmi $(IMAGE_NAME)) || true
	docker build -t $(IMAGE_NAME) .

start: build
	docker start $(DOCKER_NAME) 2> /dev/null || docker run -e NODE_ENV=production -d -p $(HOST_ADDRESS):3000 --name $(DOCKER_NAME) $(IMAGE_NAME)

dev: build
	docker run --rm -it -v ${CURDIR}/site:/srv/site -p $(HOST_ADDRESS):3000 --name $(DOCKER_NAME) $(IMAGE_NAME)

stop:
	docker stop $(DOCKER_NAME)

remove: stop
	docker rm -v $(DOCKER_NAME)
