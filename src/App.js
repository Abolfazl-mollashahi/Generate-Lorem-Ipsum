import { useState } from "react";
import data from "./data";
function App() {
  const [index, setindex] = useState(0);
  const [Data, setdata] = useState([]);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (index <= 0) {
      setindex(1);
    }
    if (index >= 20) {
      setindex(20);
    }
    let cunt = parseInt(index)
    setdata(data.slice(0,cunt));
  };
  return (
    <section className="section-center">
      <h2>tired of boring lorem ipsum?</h2>
      <form className="lorem-form" onSubmit={handlesubmit}>
        <label htmlFor="inp">paragraph :</label>
        <input
          type="number"
          name="inp"
          id="amount"
          value={index}
          onChange={(e) => setindex(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {Data.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );
}

export default App;
