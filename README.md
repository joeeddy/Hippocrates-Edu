Hippocrates-Edu

A Socratic-style educational platform with a chat feature and AI-driven 10x10 grid, built on the Hippocrates AI.

Setup Instructions





Open in Codespaces: Click “Code” > “Codespaces” > “Create Codespaces on main”.



Run the setup script in the Codespaces terminal:

pip install -r requirements.txt && sudo apt-get install -y nodejs npm && npm install && npm run build && uvicorn app:app --host 0.0.0.0 --port 8000



Open the browser preview (port 8000, click “Ports” > “Open in Browser”) to see the grid and chat for a math lesson.



(Optional) Run the original console version: python main.py.

Features





10x10 grid visualizing self-organizing AI.



Real-time chat with Socratic prompts (e.g., “Solve x + 3 = 7”).



Built with FastAPI, React, and SQLAlchemy.

License

MIT License (see LICENSE).
