import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Login from "./pages/Login"
import { FirebaseProvider } from "./context/authContext";
import "./styles.css"

function App() {
  return (
    <>
      <FirebaseProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          
        </Router>
      </FirebaseProvider>
    </>
  );
}

export default App;
