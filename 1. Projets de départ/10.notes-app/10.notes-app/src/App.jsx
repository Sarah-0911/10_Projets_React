import { useDispatch } from "react-redux"
import NotesList from "./components/NotesList"
import Sidebar from "./layouts/Sidebar"
import { getNotesData } from "./features/notesSlice"
import { useEffect } from "react"

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotesData());
  }, [])

  return (
    <div className="flex bg-slate-800 min-h-screen">
      <Sidebar />
      <NotesList />
    </div>
  )
}

export default App
