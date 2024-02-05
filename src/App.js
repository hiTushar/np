import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRegistration from './pages/UserRegistration/UserRegistration';
import Main from './pages/Main/Main';
import Taskbar from './pages/Taskbar/Taskbar';
import Protection from './components/ProtectionFlowComponents/Protection';
import User from './pages/User/User';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/new' element={<UserRegistration />} />
          <Route path='/taskbar' element={<Taskbar />} />
          <Route path='/protection' element={<Protection />} />
          <Route path='/user/*' element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
