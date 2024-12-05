export default function NoteButton({ id, note }) {

  const openNote = () => {
    console.log("note opened !");
  }

  return (
    <li
    className="cursor-pointer px-4 py-2 bg-slate-100 hover:bg-slate-50 rounded"
    onClick={openNote}>
      <p className="font-semibold text-lg text-slate-900">{note.title}</p>
      <p className="text-gray-700">{note.subtitle}</p>
    </li>
  )
}
