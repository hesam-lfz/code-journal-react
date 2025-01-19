// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { NotFound } from './pages/NotFound';
import { EntryList } from './pages/EntryList';
import { EntryForm } from './pages/EntryForm';

import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<EntryList />} />
        <Route path="details/:entryId" element={<EntryForm />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
