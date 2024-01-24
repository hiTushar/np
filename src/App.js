import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRegistration from './pages/UserRegistration/UserRegistration';
import Home from './pages/Home/Home';
import Taskbar from './pages/Taskbar/Taskbar';
import Layout from './components/Layout/Layout';
import Protection from './components/ProtectionFlowComponents/Protection';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<UserRegistration />} />
            <Route path='/taskbar' element={<Taskbar />} />
            <Route path='/protection' element={<Protection />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
