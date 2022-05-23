import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Register from './components/pages/Register/Register';
import Home from './components/pages/Homepage/Home';
import SingleSignUp from './components/pages/Individual/SingleSignUp';
import 'antd/dist/antd.css';
import SchoolSignUp from './components/pages/School/SchoolSignUp';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/SingleSignUp" element={<SingleSignUp />}/>
          <Route path='/SchoolSignUp' element={<SchoolSignUp/>}/>
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
