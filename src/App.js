import Navbar from './components/NavbarComponent/NavbarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a mi tienda"/>
    </div>
  );
}

export default App;
