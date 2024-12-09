import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";

export default function NoteDetails() {

  const { id } = useParams();
  const notes = useSelector(state => state.notes)
  const selectedNote = notes.list?.find(note => note.id === id);
  // console.log(selectedNote);


  return (
    <div>
      <p>{selectedNote.title}</p>
    </div>
  )
}
