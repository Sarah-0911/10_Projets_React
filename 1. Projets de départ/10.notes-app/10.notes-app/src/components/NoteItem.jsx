import { Link } from "react-router-dom";

export default function NoteItem({ id, note, customClass }) {

  return (
    <Link to={`/note/${id}`}>
      <li className={`cursor-pointer px-4 py-2 bg-slate-100 hover:bg-slate-50 rounded ${customClass}`}>
          <span className="block font-semibold text-lg text-slate-900">{note.title}</span>
          <span className="block text-gray-700">{note.subtitle}</span>
      </li>
    </Link>
  )
}
