import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Navbar from './components/Navigation/Navbar';
import Register from './components/pages/Register/Register';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/register" element={<Register/>} />
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
