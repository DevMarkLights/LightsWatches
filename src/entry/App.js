import './App.css';
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
