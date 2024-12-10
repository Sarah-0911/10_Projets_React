import { useParams, Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../features/notesSlice"

export default function NoteDetails() {

  const { id } = useParams();
  const notes = useSelector(state => state.notes)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeNote = () => {
    if (selectedNote) dispatch(deleteNote(id));
    navigate({pathname: "/"})
  }

  const selectedNote = notes.list?.find(note => note.id === id);

  return (
    <div className="flex flex-col">
      <div className="p-10 flex items-center gap-2">
        <Link
        to={"/"}
        className="text-sm text-slate-800 bg-slate-300 hover:bg-gray-100 px-2 py-1 rounded">
          Notes
        </Link>
        <Link
        to={`/note/editer/${id}`}
        className="px-2 py-1 rounded text-sm text-slate-200 bg-green-600 hover:bg-green-700">
          Mettre à jour
        </Link>
        <button
        className="px-2 py-1 rounded text-sm text-slate-200 bg-red-600 hover:bg-red-700"
        onClick={removeNote}>
          Supprimer
        </button>
      </div>
      {selectedNote &&
      <div className="px-10">
        <p className="text-slate-100 text-2xl">{selectedNote.title}</p>
        <p className="text-slate-200 mb-4 text-lg">{selectedNote.subtitle}</p>
        <p className="text-slate-300 text-sm">{selectedNote.bodyText}</p>
      </div>
      }
    </div>
  )
}
