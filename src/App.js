import Dashboard from "./component/dashboard";
import Home from "./component/home";
import Login from "./component/login";
import Register from "./component/register";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ChakraProvider,extendTheme  } from '@chakra-ui/react'



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
<ChakraProvider theme={theme}>
    <Router >
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/started' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
       
      </Routes>
    </Router>
  </ChakraProvider>
   

 
    
  );
}
export default App