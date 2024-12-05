import { useSelector, useDispatch } from "react-redux"
import { getNotesData } from "../features/notesSlice"
import { useEffect } from "react"
import NoteButton from "./NoteButton";

export default function NotesList() {

  const notes = useSelector(state => state.notes)
  // console.log(notes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotesData());
  }, [])



  return (
    <div className="p-10 w-full">
      <h1 className="text-slate-100 text-lg mb-4">Bienvenue sur Notes101.</h1>
      <ul
      className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {notes.list?.map(note => {
        return <NoteButton key={note.id} id={note.id} note={note} />}
        )}

      </ul>
    </div>
  )
}
