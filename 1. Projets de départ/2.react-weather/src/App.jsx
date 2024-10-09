import { useState } from "react";
import loader from "./assets/loader.svg";

function App() {

  const [data, setdata] = useState({
      loader: false,
      data: undefined,
      error: false
  })

  return (
      <main>
        <div className="loader-container">
          {data.loader && <img src={loader} alt="loading icon" />}
        </div>
        <p className="city">Paris</p>
        <p className="country">France</p>
        <p className="temperature">17°</p>
        <div className="info-icon-container">
          <img src="icons/01d.svg" alt="weather icon" />
        </div>
      </main>
  );
}

export default App;
