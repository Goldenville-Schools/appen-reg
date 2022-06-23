import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Register from './components/pages/Register/Register';
import Home from './components/pages/Homepage/Home';
import 'antd/dist/antd.css';
import IndiviOnline from './components/pages/IndiviOnline/IndiviOnline';
import IndiviPhy from './components/pages/IndiviPhysical/IndiviPhy';
import Payment from './components/pages/Payment/Payment';
import GroupOnline from './components/pages/GrpOnline/GroupOnline';
import GroupPhy from './components/pages/GrpPhy/GroupPhy';
// import SignUp from './components/Auth/SignUp';
// import ProtectedRoute from './components/ProtectedRoute';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home/>} />
          {/* <Route element = {<ProtectedRoute/>}> */}
            <Route path="/register" element={<Register/>} />
          {/* </Route>   */}

          <Route path="/IndiviOnline" element={<IndiviOnline/>} /> 
          <Route path="/IndiviPhy" element={<IndiviPhy/>} /> 
          <Route path='/Payment' element={<Payment/>}/>
          <Route path='/GroupOnline' element={<GroupOnline/>}/>
          <Route path='/GroupPhy' element={<GroupPhy/>}/>
          {/* <Route path='/SignUp' element={<SignUp/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
