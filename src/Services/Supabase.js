
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://pbhjbrcfzuxbfyhckroj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiaGpicmNmenV4YmZ5aGNrcm9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0NzEyMDYsImV4cCI6MjAzNTA0NzIwNn0.JgKZFJNEF-z7mExx46I7NPV69cb24oicA9V41uXyI7k'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;