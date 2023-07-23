import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/'>
          <Route index element={<div>Hello</div>}/>
            <Route path='services'  element={<div>Services</div>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
