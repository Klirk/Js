import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Menu from './components/Menu'
import Profile from "./components/Profile"
import ErrorPath from "./components/Error"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import BottomMenu from "./components/BottomMenu"
import Anime from "./components/Anime"
import MainPage from "./components/MainPage"

function App() {
  return (
    <div className="App App-header">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<><MainPage/><BottomMenu /></>} />
          <Route path='/anime' element={<><Anime /><BottomMenu /></>} />

          <Route path={localStorage.AuthData === undefined ? '/profile/:user' : '/profile/' + localStorage.AuthData} element={<>
            {localStorage.Auth === undefined || localStorage.Auth === 'false' ? (
              <Navigate replace to="/" />
            ) : (
              <Profile />
            )}<BottomMenu /></>} />
          <Route path='/signin' element={<>
            {localStorage.AuthData === undefined ? (
              <SignIn />
            ) : (
              <Navigate replace to={'/profile/' + localStorage.AuthData} />
            )}<BottomMenu /></>} />
          <Route path='/signup' element={<>
            {localStorage.AuthData === undefined ? (
              <SignUp />
            ) : (
              <Navigate replace to={'/profile/' + localStorage.AuthData} />
            )}<BottomMenu /></>} />
          <Route path='*' element={<><ErrorPath /></>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
