import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './components/Menu'
import MenuBottom from "./components/Profile"
import ErrorPath from "./components/Error"

function App() {
  return (
    <div className="App App-header">
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/profile' element={<><MenuBottom/></>}/>
          <Route path='*' element={<><ErrorPath/><MenuBottom /></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
