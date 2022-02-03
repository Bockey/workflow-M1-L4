import "./App.css";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="App">
      <Heading content="This is the heading" colour="red" fontSize="35px" />
      <Heading
        content="This is the second heading"
        colour="green"
        fontSize="30px"
      />
      <Heading
        content="This is the third heading"
        colour="orange"
        fontSize="25px"
      />
      <Paragraph stuff="This is the paragraph content!" />
      <Paragraph>Content here is under props.children</Paragraph>
    </div>
  );
}

export default App;
