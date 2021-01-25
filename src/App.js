import './App.css';
import { Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

import whiskey from "./images/whiskey.jpg";
import perry from "./images/perry.jpg";
import tubby from "./images/tubby.jpg";
import duke from "./images/duke.jpg";

/** App component
 * 
 * Props:
 * - dogs:
 *  [{name, age, src, facts}, ...]
 *    Where facts = ["fact1", ...]
 * 
 *  App -> {DogList, DogDetails}
 */

function App({ dogs }) {

  /** Function passed down to the DogDetails component
   *  that returns an dog object from a name given
   */
  function getDog(name) {
    return dogs.find(d => d.name === name);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogNames={dogs.map(d => d.name)} />
        <Switch>
          <Route exact path="/dogs" >
            <DogList dogs={dogs} />
          </Route>
          <Route path="/dogs/:name" >
            <DogDetails getDog={getDog} />
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
