import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [fact, setFact] = useState("");
  const [apiError, setApiError] = useState("");

  const getFact = () => {
    axios
      .get("https://catfact.ninja/facts")
      .then((response) => {
        console.log(response.data.data);
        const listOfFact = response.data.data;
        setFact(listOfFact[9].fact);
        console.log(fact);
      })
      .catch((response) => {
        setApiError(response);
        console.log(apiError);
      });
  };

  useEffect(() => {
    getFact();
  });

  if (fact) {
    return (
      <div>
        <h1> KittyCat Facts</h1>
        <button onClick={getFact}>Get me som kitty-facts</button>
        <br></br>
        <h3>{fact}</h3>
      </div>
    );
  } else if (apiError) {
    return (
      <div>
        <h1> KittyCat Facts</h1>
        <p>Kitty Facts was not loaded, try another time</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1> KittyCat Facts</h1>
        <p>Kitty Facts trying to load. Be patience!</p>
      </div>
    );
  }
}
export default App;

///////////////////////////////////// DOWN BELOW YOU SEE ANOTHER API CALL USING AXIOS AND USESTATE |  ////////////////////////////////
//                                                                                              V                               //

////EKSEMPEL-API////////
// import React, { useState } from "react";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [joke, setJoke] = useState("");

//   const getJoke = () => {
//     axios
//       .get("https://official-joke-api.appspot.com/random_joke")
//       .then((response) => {
//         console.log(response);

//         setJoke(response.data.setup + "......" + response.data.punchline);
//       });
//   };

//   return (
//     <div>
//       <h1> KittyCat Facts</h1>
//       <button onClick={getJoke}>Get me som kitty-facts</button>
//       <br></br>
//       <h3>{joke}</h3>
//     </div>
//   );
// }

// export default App;
