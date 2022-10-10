import './styles/App.css';
import { Sandbox } from './pages/sandbox';
import { BrowserRouter } from 'react-router-dom'

/**
 * 
 * Components such as <Navigation variant="list"> require use
 * of <BrowserRouter> in order to function
 *  
 * Please see react-router-dom v5 for more information on use.
 * Reference: https://v5.reactrouter.com/web/guides/quick-start
 * 
 */

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
