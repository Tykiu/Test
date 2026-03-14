// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://zfpfyuyegzzzvyxfdwxe.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmcGZ5dXllZ3p6enZ5eGZkd3hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4ODExNjEsImV4cCI6MjA4ODQ1NzE2MX0.Sxi-cRuxX5nH3DR6m148ZM0ZE1W61h0tLek0yBK4MxU"
export const supabase = createClient(supabaseUrl, supabaseKey)