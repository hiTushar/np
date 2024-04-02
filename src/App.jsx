import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRegistration from './pages/UserRegistration/UserRegistration';
import Main from './pages/Main/Main';
import UserWindow from './pages/UserWindow/UserWindow';
import { QueryClient, QueryClientProvider } from 'react-query';
import TaskbarPanel from './pages/TaskbarPanel/TaskbarPanel';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/new' element={<UserRegistration />} />
            <Route path='/taskbar' element={<TaskbarPanel />} />
            <Route path='/user/*' element={<UserWindow />} />
            {/* TODO: scalable routing architecture - all routes in one file */}
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
