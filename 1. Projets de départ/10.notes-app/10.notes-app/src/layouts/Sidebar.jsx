import folder from "../assets/folder.svg"
import edit from "../assets/edit.svg"
import { Link } from "react-router-dom"

export default function Sidebar() {

  return (
    <aside className="shrink-0 p-10 w-[100px] border border-slate-200 flex flex-col items-center gap-10">
      <div className="flex">
        <span>🔴</span>
        <span>🟡</span>
        <span>🟢</span>
      </div>
      <Link to={"/"} className="w-8 h-8">
        <img src={folder} alt="Voir toutes les notes" />
      </Link>
      <Link to={"/note/editer"} className="w-8 h-8">
        <img src={edit} alt="Editer une note" />
      </Link>
    </aside>
  )
}
