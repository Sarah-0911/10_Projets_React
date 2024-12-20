import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { addNote } from "../features/notesSlice";
import { nanoid } from "nanoid";

export default function NoteEdit() {

  const notes = useSelector(state => state.notes);
  // console.log(notes);
  const dispatch = useDispatch();

  const [inputStates, setInputStates] = useState({
    title: "",
    subtitle: "",
    bodyText: ""
  })

  const [showValidation, setShowValidation] = useState({
    title: false,
    subtitle: false,
    bodyText: false
  })

  const { id } = useParams();

  const selectedNote = notes.list?.find(note => note.id === id);

  useEffect(() => {
    if (selectedNote && id) {
      setInputStates({
        title: selectedNote.title || "",
        subtitle: selectedNote.subtitle || "",
        bodyText: selectedNote.bodyText || ""
      })
    }
  }, [id, selectedNote])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputStates.title === "") {
      setShowValidation({title: true})
    } else {
      dispatch(addNote({...inputStates, id:nanoid(8)}));
      setInputStates({
        title: "",
        subtitle: "",
        bodyText: ""
      })
    }
  }

  return (
    <div className="p-10 w-full">
      <p className="text-slate-100 text-lg mb-2">Ajouter une note</p>
      <form
      className="flex flex-col flex-grow"
      onSubmit={handleSubmit}>
        <label className="text-gray-100 mt-4 mb-1" htmlFor="title">Le titre</label>
        <input
        className="bg-slate-100 rounded py-1 px-2"
        type="text"
        id="title"
        value={inputStates.title}
        spellCheck="false"
        onChange={(e) => setInputStates({...inputStates, title: e.target.value})} />
        {showValidation.title && <p className="text-red-400 mb-2">Veuillez renseigner un titre</p>}

        <label className="text-gray-100 mt-4 mb-1" htmlFor="subtitle">Le sous-titre</label>
        <input
        className="bg-slate-100 rounded py-1 px-2"
        type="text"
        id="subtitle"
        value={inputStates.subtitle}
        spellCheck="false"
        onChange={(e) => setInputStates({...inputStates, subtitle: e.target.value})} />
        {showValidation.subtitle && <p className="text-red-400 mb-2">Veuillez renseigner un sous-titre</p>}

        <label className="text-gray-100 mt-4 mb-1" htmlFor="bodyText">Contenu de la note</label>
        <textarea
        className="bg-slate-100 rounded py-1 px-2 resize-none h-40"
        id="bodyText"
        value={inputStates.bodyText}
        spellCheck="false"
        onChange={(e) => setInputStates({...inputStates, bodyText: e.target.value})} />
        {showValidation.bodyText && <p className="text-red-400 mb-2">Veuillez écrire du contenu</p>}
        <button className="bg-slate-100 px-3 py-1 rounded w-fit mt-4">
          Enregistrer
        </button>
      </form>
    </div>
  )
}
