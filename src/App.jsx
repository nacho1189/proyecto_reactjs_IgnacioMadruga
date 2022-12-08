import NavBar from './components/NavBar/NavBar';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import ItemDetilContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
     <>
     <NavBar/>
     <ItemListContainer texto= "Mi Primer E-Commerce con jsx"/>
     <ItemDetilContainer/>
     </>
  );
}

export default App;
