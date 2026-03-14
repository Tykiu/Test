from supabase import create_client, Client

SUPABASE_URL = "https://zfpfyuyegzzzvyxfdwxe.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmcGZ5dXllZ3p6enZ5eGZkd3hlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3Mjg4MTE2MSwiZXhwIjoyMDg4NDU3MTYxfQ.atxi4CZC2NY-qh_VOup8wfLOhqHeF-xdwIKX8X9OzR8"

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
