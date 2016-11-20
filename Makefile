help: ## Prints help
	@cat $(MAKEFILE_LIST) | grep -e "^[a-zA-Z_\-]*: *.*## *" | awk 'BEGIN {FS = ":.*?## "}; {printf " > \033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Install node module dependencies
	npm install

serve-src: ## Run simple http-server for step 1 and 2 purpose
	./node_modules/.bin/http-server ./src
