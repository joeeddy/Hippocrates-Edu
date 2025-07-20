#!/bin/bash
# Script to start your FastAPI server with Uvicorn

uvicorn app:app --host 0.0.0.0 --port 8000
