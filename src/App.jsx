import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import LoginForm from "./components/LoginForm.jsx";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Index user={user} /> : <LoginForm onLogin={handleLogin} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
