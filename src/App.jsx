import Header from './components/Header';
import CustomAccordion from './components/CustomAccordion';
import Filter from './components/Filter';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function App() {
  const [category, setCategory] = useState('all');

  return (
    <>
      <Header />
      <Container as='main' className='d-flex flex-column gap-2'>
        <Filter setCategory={setCategory} />
        <CustomAccordion category={category} />
      </Container>
    </>
  );
}

export default App;
