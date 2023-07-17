// import logo from './logo.svg';
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer'
import Welcome from './components/welcome';
import './App.css';
// import Header from './components/header';

function App() {
  return (
    <div>
      <Nav/>
      <Welcome/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
