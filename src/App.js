import './Styles/App.css';
import source_data from "./Data";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

const cards = source_data.map(card => {
  return(
      <Card
          key={card.id}
          {...card}
      />
  )
})
function App() {
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
