from fastapi import APIRouter
from supabase_client import supabase

router = APIRouter(prefix="/studybuddy", tags=["StudyBuddy"])

@router.get("/requests")
def get_requests():
    data = supabase.table("study_buddy_requests").select("*").execute()
    return data.data

@router.post("/create")
def create_request(request: dict):
    data = supabase.table("study_buddy_requests").insert(request).execute()
    return {"status": "success", "data": data.data}

@router.put("/{req_id}")
def update_request(req_id: int, updates: dict):
    data = supabase.table("study_buddy_requests").update(updates).eq("id", req_id).execute()
    return {"status": "success", "data": data.data}

@router.delete("/{req_id}")
def delete_request(req_id: int):
    data = supabase.table("study_buddy_requests").delete().eq("id", req_id).execute()
    return {"status": "success", "deleted": req_id}