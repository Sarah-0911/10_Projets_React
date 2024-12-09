import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getNotesData } from "./features/notesSlice"
import NotesList from "./components/NotesList"
import Sidebar from "./layouts/Sidebar"
import SideNotes from "./layouts/SideNotes"

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotesData());
  }, [])

  return (
    <div className="flex bg-slate-800 min-h-screen">
      <Sidebar />
      <SideNotes />
      <NotesList />
    </div>
  )
}

export default App
