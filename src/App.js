import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Navigate,
  Outlet, 
 } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Login from "./pages/Login"
import "./styles.css"
import MainApp from "./pages/MainApp";
import { useAuth } from "./context/authContext";

const ProtectedRoute = ({
  user,
  redirectPath = '/404',
  children,
}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

function App() {
  const {userState, loading} = useAuth() || {};
  if(loading){
    return (<h1>CARGANDO...</h1>)
  }else
  return (
    <>      
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute user={userState}/>}>
            <Route path="/home" element={<MainApp/>}></Route>
          </Route>

          <Route element={<ProtectedRoute user={userState==null}/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>  
      </Router>
    </>
  );
}

export default App;
