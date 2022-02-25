import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainWindow from "./mainWindow";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route exact path='/'/>
        <Route exact path='/login' />
        <Route exact path='/community'/>
        <Route exact path='/gunHistory'/>
        <Route exact path='/gitRedirect' element={<GitRedirect />} />
      </Routes>
    </Router>
  );
}

function GitRedirect() {
  window.location.href = 'https://github.com/B0l0553/SiteServer'
}

function Login() {
  return (
    <div className="login-form">
    </div>
  );
}

function Home() {
  return (
    <div className='flex'>
      <MainWindow />
      <NavBar />
    </div>
  );
}


export default App;
