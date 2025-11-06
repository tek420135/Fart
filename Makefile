# ==== Environment Setup ====
init:
	python3 -m venv venv
	. venv/bin/activate && pip install --upgrade pip
	. venv/bin/activate && pip install -r requirements.txt

install:
	pip install -r requirements.txt

update:
	pip install --upgrade -r requirements.txt


# ==== Development ====
run:
	python3 backend/main.py

dev:
	FLASK_ENV=development flask run --reload

lint:
	flake8 backend ai frontend scripts

format:
	black backend ai frontend scripts

test:
	pytest -v --maxfail=1 --disable-warnings


# ==== AI and Data ====
train:
	python3 ai/training/training_pipeline.py

evaluate:
	python3 ai/training/reinforcement_learning.py

analyze:
	python3 ai/analysis/training_analysis.ipynb

generate-data:
	python3 ai/training/synthetic_data_generator.py


# ==== Build and Deployment ====
build:
	python3 scripts/build_system.py

deploy:
	python3 scripts/deploy_platform.py

docker-build:
	docker build -t potgrowhub .

docker-run:
	docker-compose up

docker-stop:
	docker-compose down


# ==== Maintenance ====
clean:
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	rm -rf build/ dist/ *.egg-info

reset:
	rm -rf venv
	make init


# ==== Documentation ====
docs:
	python3 scripts/generate_docs.py

docs-serve:
	cd docs && python3 -m http.server 8080


# ==== Git and Version Control ====
git-init:
	git init
	git add .
	git commit -m "Initial commit"

git-update:
	git add .
	git commit -m "Auto-update from Makefile"
	git push


# ==== Utility and System ====
backup:
	python3 scripts/backup_system.py

restore:
	python3 scripts/restore_system.py

status:
	@echo "Active Python: $$(which python3)"
	@echo "Virtual Environment: venv"
	@echo "Backend Status:"
	@ps aux | grep main.py || true

info:
	@echo "PotGrowHub Environment"
	@echo "======================="
	@echo "Python Version:"; python3 --version
	@echo "Pip Version:"; pip --version
	@echo "Installed Packages:"; pip list


# ==== Default ====
all: init run
