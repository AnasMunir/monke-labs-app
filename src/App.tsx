import { Button } from '@chakra-ui/react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Product from './pages/product/product';
import Checkout from './pages/checkout/checkout';

function App() {
  return (
    <>
      <Button variant='primary'>
        <Link to='/'>Home</Link>
      </Button>
      <Button variant='primary'>
        <Link to='/product/salad'>Product</Link>
      </Button>
      <Button variant='primary'>
        <Link to='/checkout'>Checkout</Link>
      </Button>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product/:id' element={<Product />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Routes>
    </>
  );
}

export default App;
