import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './components/Menu'
import Profile from "./components/Profile"
import ErrorPath from "./components/Error"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import BottomMenu from "./components/BottomMenu"

function App() {
  return (
    <div className="App App-header">
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/' element={<><BottomMenu/></>}/>
          <Route path='/profile' element={<><Profile/><BottomMenu/></>}/>
          <Route path='/signin' element={<><SignIn/><BottomMenu/></>}/>
          <Route path='/signup' element={<><SignUp/><BottomMenu/></>}/>
          <Route path='*' element={<><ErrorPath/></>}/>
          
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
