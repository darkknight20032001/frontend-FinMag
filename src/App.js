import './App.css';
import Authentication from './Authentication';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/authentication' element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
