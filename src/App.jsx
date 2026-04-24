import './App.css';
import ErrorComponent from './components/ErrorComponent'
import CounterPage from './components/CounterPage';
import { Routes, Route } from 'react-router-dom';
import ListOptionPage from './components/ListOptionPage';

function App() {
  return (
    <Routes>
      <Route exact path="/error" element={<ErrorComponent />} />
      <Route exact path="/counter" element={<CounterPage />} />
      <Route path="/" element={<ListOptionPage />} />
    </Routes>
  );
}

export default App
