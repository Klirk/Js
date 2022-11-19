import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Menu from './components/Menu'
import Profile from "./components/Profile"
import ErrorPath from "./components/Error"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import BottomMenu from "./components/BottomMenu"
import Game from "./components/Game"

function App() {
  return (
    <div className="App App-header">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<><BottomMenu /></>} />
          <Route path='/game' element={<><Game /><BottomMenu /></>} />
          <Route path='/profile/:user' element={<>
            {localStorage.Auth === undefined || localStorage.Auth === 'false' ? (
              <Navigate replace to="/" />
            ) : (
              <Profile />
            )}<BottomMenu /></>} />
          <Route path='/signin' element={<>
            {localStorage.AuthData === undefined ? (
              <SignIn />
            ) : (
              <Navigate replace to="/" />
            )}<BottomMenu /></>} />
          <Route path='/signup' element={<>
            {localStorage.AuthData === undefined ? (
              <SignUp />
            ) : (
              <Navigate replace to="/" />
            )}<BottomMenu /></>} />
          <Route path='*' element={<><ErrorPath /></>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
