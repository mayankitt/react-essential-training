import { useState } from "react";
import "./App.css";
import chef from "./assets/images/chef.jpg";

function Header({name, year}) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = [
  "Dal Bhaat chokha",
  "Dal Pithi",
  "Dahi Choora",
  "Litti Chokha",
  "Dal bhaat Tarkaari"
];

const dishObjects = items.map((item, index) => ({
  id: index,
  title: item
}))

function Main({dishes}) {
  return (
    <>
      <img src={chef} height={200} alt="A photo of an Indian chef." />
      <ul>
        {dishes.map((dish) => (
          <li style={{ listStyleType: "none" }} key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [status, setStatus] = useState(true);
  return (
    <>
      <Header name="Mayank" year={new Date().getFullYear()}/>
      <main>
        <h2>We serve the most delicious food around!</h2>
        <Main dishes={dishObjects} />
      </main>
      <footer>
        <h3>The restaurant is currently {status ? "open" : "closed"}.</h3>
        <button onClick={() => setStatus(!status)}>{status ? "Close" : "Open"} Restaurant</button>
      </footer>
    </>
  );
}

export default App;
