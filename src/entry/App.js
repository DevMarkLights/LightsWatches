import './App.css';
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Navbar from '../components/navbar/navbar';
import HomePage from '../pages/homepage/home_page';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
