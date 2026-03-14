from fastapi import APIRouter
from supabase_client import supabase

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/login")
def login(user: dict):
    data = supabase.table("users").select("*").eq("mssv", user["mssv"]).execute()
    if data.data and data.data[0]["password"] == user["password"]:
        return {"status": "success", "user": data.data[0]}
    return {"status": "error", "message": "Sai MSSV hoặc mật khẩu"}

@router.post("/register")
def register(user: dict):
    data = supabase.table("users").insert(user).execute()
    return {"status": "success", "user": data.data}