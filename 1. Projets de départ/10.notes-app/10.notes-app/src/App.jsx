import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getNotesData } from "./features/notesSlice"
import NotesList from "./components/NotesList"
import Sidebar from "./layouts/Sidebar"
import SideNotes from "./layouts/SideNotes"
import NoteDetails from "./components/NoteDetails"
import NoteEdit from "./components/NoteEdit"

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotesData());
  }, [])

  return (
    <div className="flex bg-slate-800 min-h-screen">
      <BrowserRouter >
        <Sidebar />
        <SideNotes />
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/note/:id" element={<NoteDetails />} />
          <Route path="/note/editer" element={<NoteEdit />} />
          <Route path="/note/editer/:id" element={<NoteEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
