import "./App.css";

function App() {
  const objectStyle = {
    color: "green",
    border: "1px solid black",
    padding: "5px",
  };

  return (
    <div className="container">
      <h1 style={{ color: "magenta", border: "1p solid black" }}>
        Different ways of styling in React
      </h1>
      <h2 style={objectStyle}>Styling with object</h2>
      <h2 className="css-style">Styling with CSS</h2>
    </div>
  );
}

export default App;

// Different ways of styling
// we styled by using inlinen styling, style as an object and also regular styling with css classes
// the best way to style is to use css classes so you dont have to repeat your code.
