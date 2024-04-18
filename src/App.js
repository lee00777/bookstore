import "./App.css";
import Book from "./components/Book";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Book />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
