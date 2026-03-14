from fastapi import APIRouter
from supabase_client import supabase

router = APIRouter(prefix="/tutor", tags=["Tutor"])

@router.get("/requests")
def get_tutor_requests():
    data = supabase.table("tutor_requests").select("*").execute()
    return data.data

@router.post("/create")
def create_tutor_request(request: dict):
    data = supabase.table("tutor_requests").insert(request).execute()
    return {"status": "success", "data": data.data}

@router.put("/{req_id}")
def update_tutor_request(req_id: int, updates: dict):
    data = supabase.table("tutor_requests").update(updates).eq("id", req_id).execute()
    return {"status": "success", "data": data.data}

@router.delete("/{req_id}")
def delete_tutor_request(req_id: int):
    data = supabase.table("tutor_requests").delete().eq("id", req_id).execute()
    return {"status": "success", "deleted": req_id}

@router.get("/list")
def list_tutors():
    data = supabase.table("users").select("*").eq("role", "tutor").execute()
    return data.data