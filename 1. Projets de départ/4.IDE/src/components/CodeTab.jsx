import { useState } from "react";

export default function CodeTab({ id, code }) {

  return (
    <textarea
    spellCheck="false"
    className="bg-zinc-900 text-slate-200 p-8 block h-full w-full focus:outline-none resize-none"
    value={code}
    >
    </textarea>
  )
}
