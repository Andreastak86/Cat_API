import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [fact, setFact] = useState("");

  // function getRandomCatFact(fct) {
  //   const randomFact = Math.floor(Math.random() * fct.length);
  //   const hardFact = fct[randomFact];
  //   return hardFact;
  // }
  // const results = getRandomCatFact(setFact);

  const getFact = () => {
    axios.get("https://catfact.ninja/facts").then((response) => {
      console.log(response.data.data);
      const listOfFact = response.data.data;
      setFact(listOfFact[9].fact);
      console.log(fact);
      // console.log(results);
    });
  };

  return (
    <div>
      <h1> KittyCat Facts</h1>
      <button onClick={getFact}>Get me som kitty-facts</button>
      <br></br>
      <h3>{fact}</h3>
    </div>
  );
}

export default App;
