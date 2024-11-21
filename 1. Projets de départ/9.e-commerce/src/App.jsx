import ModalBtn from "./components/ModalBtn";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div className="bg-slate-800 p-8">
      <ModalBtn />
      <div className="max-w-3xl mt-8 mx-auto p-2">
        <h1 className="text-slate-100 mb-4 text-lg">Here are our products</h1>
        <ProductsList />
      </div>
    </div>
  );
}

export default App;
