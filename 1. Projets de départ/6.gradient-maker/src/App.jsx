import LeftContainer from "./layouts/LeftContainer"
import Gradient from "./components/Gradient"

function App() {
  return (
    <main className="relative flex max-w-2xl mx-auto mt-8 p-4 border border-slate-400">
      <LeftContainer />
      <Gradient />
    </main>
  )
}

export default App
