import "./App.css";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import List from "./components/List";

function App() {
  return (
    <div className="container">
      <Heading />
      <Paragraph />
      <List />
    </div>
  );
}

export default App;
