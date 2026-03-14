from fastapi import APIRouter
from supabase_client import supabase

router = APIRouter(prefix="/notifications", tags=["Notifications"])

@router.get("/{user_id}")
def get_notifications(user_id: int):
    data = supabase.table("notifications").select("*").eq("user_id", user_id).execute()
    return data.data

@router.post("/create")
def create_notification(notification: dict):
    data = supabase.table("notifications").insert(notification).execute()
    return {"status": "success", "data": data.data}

@router.put("/{notif_id}/read")
def mark_as_read(notif_id: int):
    data = supabase.table("notifications").update({"read_status": True}).eq("id", notif_id).execute()
    return {"status": "success", "data": data.data}

@router.delete("/{notif_id}")
def delete_notification(notif_id: int):
    data = supabase.table("notifications").delete().eq("id", notif_id).execute()
    return {"status": "success", "deleted": notif_id}