import './styles/App.css';
import { Sandbox } from './pages/sandbox';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="flex items-center justify-center h-screen w-screen bg-orange-400">
        <Sandbox />
      </div>
    </BrowserRouter>
  );
}

export default App;
