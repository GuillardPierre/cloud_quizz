import Header from './components/Header';
import CustomAccordion from './components/CustomAccordion';
import Filter from './components/Filter';
import './assets/styles/app.scss';
import './assets/styles/main.scss';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState('all');

  return (
    <>
      <Header />
      <main>
        <Filter setCategory={setCategory} />
        <CustomAccordion category={category} />
      </main>
    </>
  );
}

export default App;
