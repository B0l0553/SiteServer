import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainWindow from "./mainWindow";
import NavBar from "./NavBar";
import MiniBar from './MiniBar';
import Login from "./Login";



function App() {
  
  
  return (
    <Router>
      <Home>
        <Routes>
          <Route exact path='/' element={<Dashboard />}/>
          <Route exact path='/login' /> // TODO: LOGIN
          <Route exact path='/community'/>
          <Route exact path='/gunHistory'/>
          <Route exact path='/gitRedirect' element={<GitRedirect />} />
        </Routes>
      </Home>
    </Router>
  );
}

function GitRedirect() {
  window.location.href = 'https://github.com/B0l0553/SiteServer'
}

function Dashboard() {
  return (
    <>
      //TODO: SAVOIR QUOI METTRE COMME TRUC DANS CA
      //TODO: SUREMENT D MEME DE MERDE
    </>
  )
}

const Home = (props) => {
  return (
    <div className='flex'>
      <MiniBar />
      <MainWindow>
        {props.children}
      </MainWindow>
      <NavBar />
    </div>
  );
}


export default App;
