import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";

import Index from "./pages/Index.jsx";
import LoginForm from "./components/LoginForm.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            isLoggedIn ? (
              <Index username={username} />
            ) : (
              <LoginForm onLogin={handleLogin} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
