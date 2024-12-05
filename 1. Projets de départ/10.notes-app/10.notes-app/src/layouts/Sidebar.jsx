import folder from "../assets/folder.svg"
import edit from "../assets/edit.svg"

export default function Sidebar() {
  return (
    <aside className="shrink-0 p-10 w-[100px] border border-slate-200 flex flex-col items-center gap-10">
      <div className="flex">
        <span>🔴</span>
        <span>🟡</span>
        <span>🟢</span>
      </div>
      <a href="#" className="cursor-pointer w-8 h-8">
        <img src={folder} alt="Voir toutes les notes" />
      </a>
      <a href="#" className="cursor-pointer w-8 h-8">
        <img src={edit} alt="Editer une note" />
      </a>
    </aside>
  )
}
