from fastapi import APIRouter
from supabase_client import supabase

router = APIRouter(prefix="/users", tags=["Users"])

@router.get("/{user_id}")
def get_user(user_id: int):
    data = supabase.table("users").select("*").eq("id", user_id).execute()
    return data.data

@router.put("/{user_id}")
def update_user(user_id: int, user: dict):
    data = supabase.table("users").update(user).eq("id", user_id).execute()
    return {"status": "success", "user": data.data}

@router.get("/")
def list_users():
    data = supabase.table("users").select("*").execute()
    return data.data