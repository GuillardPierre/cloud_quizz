import Header from './components/Header';
import CustomAccordion from './components/CustomAccordion';
import Filter from './components/Filter';
import './assets/styles/app.scss';
import './assets/styles/main.scss';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function App() {
  const [category, setCategory] = useState('all');

  return (
    <Container as='body'>
      <Header />
      <main>
        <Filter setCategory={setCategory} />
        <CustomAccordion category={category} />
      </main>
    </Container>
  );
}

export default App;
