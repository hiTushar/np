import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRegistration from './pages/UserRegistration/UserRegistration';
import Home from './pages/Home/Home';
import Taskbar from './pages/Taskbar/Taskbar';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<UserRegistration />} />
            <Route path='/taskbar' element={<Taskbar />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
