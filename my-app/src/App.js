import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
function App() {
  return (
    <div className="App">
        <Header />
      <section>
        <Navbar />
        <Main />
      </section>
    </div>
  );
}

export default App;
