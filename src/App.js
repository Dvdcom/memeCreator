import logo from './logo.svg';
import './App.css';
import Pie from './componentes/Pie';
import MemeSeleccion from './componentes/MemeSeleccion';


function App() {
  return (
    <div className="inicio">
      <header className="App-header m-3">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Crea tu propio meme</h1>
      </header>
      <main>
          <MemeSeleccion />
      </main>
      <footer className='footer'>
        <Pie />
      </footer>
    </div>
  );
}



export default App;
