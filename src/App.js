import Navbar from './components/NavbarComponent/NavbarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import FooterComponent from './components/FooterComponent/FooterComponent';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a mi tienda"/>
      <FooterComponent/>
    </div>
  );
}

export default App;
