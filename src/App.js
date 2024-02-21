import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRegistration from './pages/UserRegistration/UserRegistration';
import Main from './pages/Main/Main';
import Taskbar from './pages/Taskbar/Taskbar';
import Protection from './components/ProtectionFlowComponents/Protection';
import UserWindow from './pages/UserWindow/UserWindow';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/new' element={<UserRegistration />} />
            <Route path='/taskbar' element={<Taskbar />} />
            <Route path='/protection' element={<Protection />} />
            <Route path='/user/*' element={<UserWindow />} />
            {/* TODO: scalable routing architecture - all routes in one file */}
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
