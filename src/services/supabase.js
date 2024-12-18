import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pblcyjmyyncjkanujqth.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBibGN5am15eW5jamthbnVqcXRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5NzA3MzcsImV4cCI6MjA0ODU0NjczN30.GPVQ2Dn08vDf_oyq7HWDlTT_SEZEXj-2nhEX-1k5g1c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
