import LeftContainer from "./layouts/LeftContainer"
import Visualization from "./layouts/Visualization/Visualization"

function App() {
  return (
    <main className=" flex max-w-[600px] mx-auto mt-8 border border-gray-500">
      <LeftContainer />
      <Visualization />
    </main>
  )
}

export default App
