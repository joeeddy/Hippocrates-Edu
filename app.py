import asyncio
import socketio
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# Create a Socket.IO server
sio = socketio.AsyncServer(cors_allowed_origins='*')
app = FastAPI()

# Mount the Socket.IO ASGI app
app = socketio.ASGIApp(sio, app)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Background task to emit grid updates
async def broadcast_grid():
    while True:
        # Replace with your real grid data
        grid_data = {"grid": "sample data"}
        await sio.emit('grid_update', grid_data)
        await asyncio.sleep(2)  # every 2 seconds

# Start background task on startup
@app.on_event("startup")
async def startup_event():
    asyncio.create_task(broadcast_grid())

# Simple root endpoint
@app.get("/")
async def read_root():
    return {"message": "FastAPI with Socket.IO server is running."}

if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8000)
