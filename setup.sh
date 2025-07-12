#!/bin/bash
pip install -r requirements.txt
sudo apt-get install -y nodejs npm
npm install
npm run build
uvicorn app:app --host 0.0.0.0 --port 8000
