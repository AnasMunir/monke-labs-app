import { useState } from 'react';
import './App.css';
import { Button } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Button bg='brand.primary.500' color='white' fontWeight={600}> */}
      <Button variant='primary'>Add to cart</Button>
    </>
  );
}

export default App;
