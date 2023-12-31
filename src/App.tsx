import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Checkout from './pages/checkout/Checkout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
    </Routes>
  );
}

export default App;
