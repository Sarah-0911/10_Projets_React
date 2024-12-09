import { useSelector } from "react-redux"
import NoteItem from "./NoteItem"

export default function NotesList() {

  const notes = useSelector(state => state.notes)

  return (
    <div className="p-10 w-full">
      <h1 className="text-slate-100 text-lg mb-4">Bienvenue sur Notes101.</h1>
      <ul
      className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {notes.list?.map(note => {
        return <NoteItem key={note.id} id={note.id} note={note} />}
        )}
      </ul>
    </div>
  )
}
