import './App.css';
import { UserProvider } from './application/UserProvider';
import Pie from './componentes/Pie';
import Formprincipal from './componentes/Formprincipal';
import Cabecera from './componentes/Cabecera';

function App() {
  return (
    <UserProvider>
      <div className="inicio">
        <Cabecera />
        <Formprincipal />
        <Pie />
      </div>
    </UserProvider>
  );
}



export default App;
