import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NoteEdit() {

  const notes = useSelector(state => state.notes);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");

  const { id } = useParams();

  const selectedNote = notes.list?.find(note => note.id === id);

  useEffect(() => {
    if (selectedNote && id) {
      setTitle(selectedNote.title || "");
      setSubTitle(selectedNote.subtitle || "");
      setContent(selectedNote.bodyText || "");
    }
  }, [id, selectedNote])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Titre :", title);
    console.log("Sous-titre :", subTitle);
    console.log("Contenu :", content);
  }

  return (
    <div className="p-10 border w-full">
      <p className="text-slate-100 text-lg mb-2">Ajouter une note</p>
      <form
      className="flex flex-col flex-grow"
      onSubmit={handleSubmit}>
        <label className="text-gray-100 mt-4 mb-1" htmlFor="title">Le titre</label>
        <input
        className="bg-slate-100 rounded py-1 px-2"
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
        <label className="text-gray-100 mt-4 mb-1" htmlFor="subtitle">Le sous-titre</label>
        <input
        className="bg-slate-100 rounded py-1 px-2"
        type="text"
        id="subtitle"
        value={subTitle}
        onChange={(e) => setSubTitle(e.target.value)} />
        <label className="text-gray-100 mt-4 mb-1" htmlFor="note-content">Contenu de la note</label>
        <textarea
        className="bg-slate-100 rounded py-1 px-2 resize-none h-40"
        id="note-content"
        value={content}
        onChange={(e) => setContent(e.target.value)} />
        <button className="bg-slate-100 px-3 py-1 rounded w-fit mt-4">
          Enregistrer
        </button>
      </form>
    </div>
  )
}
