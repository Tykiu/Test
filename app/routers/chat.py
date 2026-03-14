from fastapi import APIRouter
from supabase_client import supabase

router = APIRouter(prefix="/chat", tags=["Chat"])

@router.get("/{user_id}")
def get_chats(user_id: int):
    data = supabase.table("chats").select("*").or_(f"sender_id.eq.{user_id},receiver_id.eq.{user_id}").execute()
    return data.data

@router.post("/send")
def send_message(msg: dict):
    data = supabase.table("chats").insert(msg).execute()
    return {"status": "success", "message": data.data}