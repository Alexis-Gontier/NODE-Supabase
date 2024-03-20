import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://stpkekbaplympclyjjah.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0cGtla2JhcGx5bXBjbHlqamFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NTU5MTIsImV4cCI6MjAyNTAzMTkxMn0.JxcRcWu1AM19_853KafyIR-94PkG5m3LdIKb6a0s-j4'
const supabase = createClient(supabaseUrl, supabaseKey)


async function getNotes() {
    
    let { data, error } = await supabase
      .from('notes')
      .select()
      return { data, error }
}

async function getNote(id) {
    
  // SELECT *  FROM notes WHERE id = 4
  let { data, error } = await supabase
  .from('notes')
  .select()
  .eq('id', id)
  return { data, error }
}

async function addNote(info) {

  const { data, error } = await supabase
  .from('notes')
  .insert(info)
  .select()
  return { data, error }
}



export { getNotes, getNote, addNote }
