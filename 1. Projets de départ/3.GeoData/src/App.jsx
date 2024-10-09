import CountriesList from "./components/CountriesList"

function App() {
  return (
    <div className="min-h-screen bg-slate-800">
      <div className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-gray-50 text-3xl">Europe Countries data</h1>
        <p className="text-gray-100 mb-8">Click a card to reveal a country's information</p>
      <CountriesList />
      </div>
    </div>
  )
}

export default App
