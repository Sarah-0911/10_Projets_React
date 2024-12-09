import { useSelector } from "react-redux"
import NoteItem from "../components/NoteItem"

export default function SideNotes() {

  const notes = useSelector(state => state.notes);

  return (
    <aside className="bg-slate-100 text-slate-900 w-[240px] py-10 shrink-0">
      <p className="text-xl pb-6 font-semibold text-center border-b border-gray-300 text-slate-800">Mes notes</p>
      <ul
      className="divide-y divide-slate-300">
        {notes.list?.map(note => {
        return <NoteItem
                key={note.id}
                id={note.id}
                note={note}
                customClass="hover:bg-slate-200 w-full py-4" />}
        )}
      </ul>
    </aside>
  )
}
