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
  "Dal Makhni",
  "Litti Chokha"
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
  return (
    <div>
      <Header name="Mayank" year={new Date().getFullYear()}/>
      <main>
        <h2>We serve the most delicious food around!</h2>
        <Main dishes={dishObjects} />
      </main>
    </div>
  );
}

export default App;
