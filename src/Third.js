import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*
 <Route
          path="/user/:username"
          exact
          render={({ match }) => {
            return <h1>Welcome {match.params.username}</h1>;
          }}
        ></Route>

match is a dynamic parameter which holds all the parameters that we pass
This is the example with dynamic routing
*/

/*
“React Router keeps your UI in sync with the URL. 
It has a simple API with powerful features like 
lazy code loading, dynamic route matching, and 
location transition handling built right in. 
Make the URL your first thought, not an
after-thought.”

Routing is the capacity to show different pages 
to the user. That means the user can move between 
different parts of an application by entering a 
URL or clicking on an element.

BrowserRouter = makes us manage the route it needs to be top level
Route = the actual route, path is the url and then the component/callback fucntion
So now it load hime + about
we need to add another parameter called exact
We also need to pass the component to render for each route
Set up routing in you App.js and after you defined your routes/url:s you can use
Link throughout your app.


*/
