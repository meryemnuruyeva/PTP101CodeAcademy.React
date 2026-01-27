import Login from "./components/Login";
import Logout from "./components/Logout";
import Welcome from "./components/Welcom";
import Product from "./components/Product";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      {!isLogged ? (
        <Login setIsLogged={setIsLogged} />
      ) : (
        <>
          <Welcome />
          <Logout setIsLogged={setIsLogged} />
        </>
      )}

      {!isLogged ? (
        <p>You should login to see products</p>
      ) : (
        <Product />
      )}
    </div>
  );
}

export default App;
