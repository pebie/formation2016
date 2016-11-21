help: ## Prints help
	@cat $(MAKEFILE_LIST) | grep -e "^[a-zA-Z_\-]*: *.*## *" | awk 'BEGIN {FS = ":.*?## "}; {printf " > \033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Install node module dependencies
	npm install

dev: ## Run application within a development environment
	babel-node \
	./node_modules/.bin/webpack-dev-server \
	--progress \
	--colors \
	--config ./webpack/webpack.dev.config.js --content-base src
