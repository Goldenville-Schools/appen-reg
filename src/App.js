import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from './components/pages/Register/Register';
import Home from './components/pages/Homepage/Home';
import 'antd/dist/antd.css';
import IndiviOnline from './components/pages/IndiviOnline/IndiviOnline';
import IndiviPhy from './components/pages/IndiviPhysical/IndiviPhy';
import Payment from './components/pages/Payment/Payment';
import GroupOnline from './components/pages/GrpOnline/GroupOnline';
import GroupPhy from './components/pages/GrpPhy/GroupPhy';
import Signin from './components/Auth/Signin';
import SignUp from './components/Auth/SignUp';
import Dashboard from './components/pages/Dashboard/Dashboard';
import ProtectedRoutes from './components/ProtectedRoutes';
import StartReg from './components/pages/DashStartReg/StartReg';
import RegMembers from './components/pages/DashRegistered/RegMembers';
// import Speakers from './components/pages/Speakers/Speakers';
import "../src/Dashstyle/dark.css"
import { useContext } from 'react';
import { DarkModeContext } from './Context/darkModeContext';



function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "App dark" : "App"}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home/>} />   
          <Route path="/IndiviOnline" element={<IndiviOnline/>} /> 
          <Route path="/IndiviPhy" element={<IndiviPhy/>} /> 
          <Route path='/Payment' element={<Payment/>}/>
          <Route path='/GroupOnline' element={<GroupOnline/>}/>
          <Route path='/GroupPhy' element={<GroupPhy/>}/>
          <Route path='/Signin' element={<Signin/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          
          <Route element = {<ProtectedRoutes/>}>
              <Route path='/Dashboard' element={<Dashboard/>}/> 
              <Route path='/StartReg' element={<StartReg/>} />
              <Route path='/RegMembers' element={<RegMembers/>} />
              {/* <Route path='/Speakers' element={<Speakers/>} /> */}
              <Route path="/register" element={<Register/>} />
              
          </Route>   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
