import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xonvzblothhnclgkcask.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvbnZ6YmxvdGhobmNsZ2tjYXNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0MjUyMDQsImV4cCI6MjA2NTAwMTIwNH0.uqfKQS0Pv6g4pzIYjBp-bu1cO3dXG0LWuiWaZ9jfQd4';
export const supabase = createClient(supabaseUrl, supabaseKey);
