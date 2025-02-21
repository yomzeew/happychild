import Dashboard from "./component/dashboard";
import Home from "./component/home";
import Login from "./component/login";
import Register from "./component/register";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ChakraProvider,extendTheme  } from '@chakra-ui/react'
import { AuthProvider } from "./Authroute/Auth";
import { ProtectedRoute, ProtectedRouteAdmin } from "./Authroute/protectedRoutes";
import IdleTimer from "./Authroute/IdleTimer";
import LoginAdmin from "./component/Admin/loginadmin";
import ForgetPassword from "./component/forgotpass";
import DashboardAdmin from "./component/Admin/dashboardAdmin";





function App() {
 const theme = extendTheme({
    colors: {
      brand: {
        50: '#8994DF',
        500: '#4956AD',
        900: '#262F71',
      }
    }
  })
  return (
    <Router >
    <AuthProvider>
      <IdleTimer timeout={600000} />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/started' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path="/forgotpass" element={<ForgetPassword/>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute> } />
        <Route path="/adminlogin" element={<LoginAdmin/>} />
        <Route path="/dashboardadmin" element={<ProtectedRouteAdmin><DashboardAdmin /></ProtectedRouteAdmin> } />
    
      </Routes>
      </AuthProvider>
    </Router>
  
 
   

 
    
  );
}
export default App