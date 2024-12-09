import { useParams } from "react-router-dom"

export default function NoteDetails() {

  const params = useParams();
  console.log(params.id);


  return (
    <div>NoteDetails {params.id}</div>
  )
}
