.PHONY: all

all: .docker-build

.docker-build: site/ Dockerfile
	(docker images | tail -n +2 | awk '{print $1}' | sort | uniq | grep site_eits && docker rmi site_eits) || true
	docker build -t site_eits .
	touch $@
