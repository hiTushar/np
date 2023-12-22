import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRegistration from './pages/UserRegistration/UserRegistration';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<UserRegistration />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
