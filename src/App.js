import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRegistration from './pages/UserRegistration/UserRegistration';
import Home from './pages/Home/Home';
import Taskbar from './pages/Taskbar/Taskbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<UserRegistration />} />
          <Route path='/taskbar' element={<Taskbar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
