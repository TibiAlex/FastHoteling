import { BrowserRouter as Router, 
                          Routes, 
                          Route,
                          Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/loginComponent/Login';
import Register from './components/registerComponent/Register';
import Cookies from 'universal-cookie';

function App() {

  const cookie = new Cookies();
  var count= Object.keys(cookie.getAll()).length;

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={(count === 0) ? <Navigate to='login'/> : <Navigate to='home'/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
