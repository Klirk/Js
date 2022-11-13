import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './components/Menu'
import Profile from "./components/Profile"
import ErrorPath from "./components/Error"

function App() {
  return (
    <div className="App App-header">
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/profile' element={<><Profile/></>}/>
          <Route path='*' element={<><ErrorPath/></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
