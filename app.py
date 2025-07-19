from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from network import Network

app = FastAPI()

# Serve React frontend from the build directory
app.mount("/", StaticFiles(directory="build", html=True), name="static")

network = Network(grid_size=5)

@app.get("/api/states")
async def get_grid_states():
    network.update()
    return [[node.state for node in row] for row in network.grid]
