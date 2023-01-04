import {BrowserRouter as Router , Routes , Route}  from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import AddActivity from './pages/AddActivity';
import { Edit } from './pages/Edit';

function App() {
  return (
    <>
    <Router>
     <div className='container'>
     <Header />
     <Routes>
     <Route path='/' element={<Dashboard/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/register' element={<Register/>}></Route>
     <Route path='/addactivity' element={<AddActivity/>}></Route>
     <Route path='/editactivity' element={<Edit />}></Route>
     
     </Routes>
    </div>
    </Router> 
    <ToastContainer/> 
    </>
  );
}

export default App;
