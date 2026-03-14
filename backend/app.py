from fastapi import FastAPI
from routers import auth, users, chat, studybuddy, tutor, notifications

app = FastAPI(title="Study Buddy API")

app.include_router(auth.router)
app.include_router(users.router)
app.include_router(chat.router)
app.include_router(studybuddy.router)
app.include_router(tutor.router)
app.include_router(notifications.router)

@app.get("/")
def root():
    return {"message": "Study Buddy API đang chạy!"}
