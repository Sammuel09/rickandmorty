import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import SingleCharacter from "./views/SingleCharacter";
import { request } from "./utils/apiRequest";
import Home from "./views/Home";

function App() {
  const [characters, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getCharacters = async () => {
      setHasError(false);
      setIsLoading(true);
      try {
        const charactersFromApi = await request("character");
        setCharacter(charactersFromApi.results);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getCharacters();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        {hasError && <Error />}
        <Route
          path="/"
          exact
          render={() => <Home isLoading={isLoading} characters={characters} />}
        />
        <Route
          exact
          path="/character/:characterId"
          component={SingleCharacter}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
