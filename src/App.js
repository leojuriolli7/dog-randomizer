import React, { useEffect, useState } from "react";
import "./App.css";
import { api } from "./services/api";
import { Spinner, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [dogPhoto, setDogPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  const getDog = () => {
    api.get("breeds/image/random").then((response) => {
      setDogPhoto(response.data.message);
      setLoading(false);
    });
  };

  const randomizeDogPhoto = () => {
    setLoading(true);
    getDog();
  };

  useEffect(() => {
    getDog();
  }, []);

  return (
    <div className="App">
      <h1>Dog Randomizer</h1>
      <Button variant="light" onClick={randomizeDogPhoto} disabled={loading}>
        {" "}
        Randomize dog{" "}
      </Button>

      {loading && <Spinner animation="border" variant="light" size="sm" />}

      {dogPhoto && <img className="dog" src={dogPhoto} alt="Dog" />}
    </div>
  );
}

export default App;
