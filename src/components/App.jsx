import React, { Fragment, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header/Header';
import FilmId from './pages/FilmId';
import Films from './pages/Films';
import Home from './pages/Home';
import Login from './pages/Login';
import Error from './pages/Error';
// import About from './pages/About';
// import Posts from './pages/Posts';
// import PostIdPages from './pages/PostIdPages';
function App() {
  const [loginned, setLoginned] = useState(localStorage.getItem('login'));
  const exit = () => {
    setLoginned(false);
    localStorage.setItem("login" , '')
  }

  return (
    <Router>
      <Fragment>
        <Header exit={exit} loginned={loginned} />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/films/:id" element={<FilmId />} />
          <Route exact path="/films" element={<Films />} />
          <Route path="/login" element={<Login setLoginned={setLoginned} />} />

          {localStorage.getItem('login') ? (
            <Route path="*" element={<Home />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
