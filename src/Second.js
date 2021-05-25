import { useEffect, useState } from "react";
import "./App.css";

let born = false;
function App() {
  const [growth, setGrowth] = useState(0);
  const [stop, setStopped] = useState(false);

  useEffect(() => {
    if (born) {
      document.title = "Stopped";
    }
  }, [stop]);
  // OBS! I forgot this in our example :D
  // try this code out and youll see the title of the document changes when component is stopped.

  // 1. run the first time - when the component is mounted
  useEffect(() => {
    console.log("Component is mounted");
  }, []);
  // first argument is a callback function and second can be an empty array
  // runs every time the component is updated

  // now runs on every update
  useEffect(() => {
    if (born) {
      console.log("Runs mounted and updated");
    } else {
      born = true;
    }

    if (growth > 70) {
      setStopped(true);
    }

    return function cleanUp() {
      console.log("Cleanup!");
    };
  });

  // this is so we can see the component being updated
  const handleGrowth = () => {
    setGrowth(growth + 10);
  };

  return (
    <div className="container">
      <h2>useEffect</h2>
      <h3>Growth: {growth}</h3>
      <button onClick={handleGrowth}>Learn and grow</button>
      <div>
        <h3>useEffect examples</h3>
      </div>
    </div>
  );
}

export default App;

// USEEFFECT
/*
useEffect has a completeley different signature/syntax than useState
its a function thats accepts two parameters, a callback functions and a second parameter that
usually is an empty array. It runs when the component is mounted either the first time or updated. 
it depends on the second parameter, if i pass an empty array here the component is mounted/born
we can see the consol.log at once and it only runs one time
and if i dont want it to run on initial mount we can create a variable
now it ony runs when i update
*/
