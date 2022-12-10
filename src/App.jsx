import NavBar from './components/NavBar/NavBar';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import ItemDetilContainer from './components/ItemDetailContainer/ItemDetailContainer';

import Cart from './components/Cart/Cart';

import { BrowserRouter, Routes,Route } from 'react-router-dom';



function App() {
  return (
     <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer texto= "Mi Primer E-Commerce con jsx" />}/> 
          <Route path='/categoria/:categoriaId' element={<ItemListContainer texto= "Mi Primer E-Commerce con jsx" />} />      
          <Route path='/cart' element ={<Cart />}/>
          <Route path='detalle' element = {<ItemDetilContainer />}/>
        </Routes>
      </BrowserRouter>
     </>
  );
}

export default App;
