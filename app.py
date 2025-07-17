from fastapi import FastAPI
from network import Network

app = FastAPI()
network = Network(grid_size=5)  # Adjust size if needed

@app.get("/")
async def root():
    return {"message": "Hippocrates-Edu backend is live!"}

@app.get("/states")
async def get_grid_states():
    network.update()
    return [[node.state for node in row] for row in network.grid]
