
import './App.css';
import SimpleOmeletteRecipe from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
   <>
    <Router>
      <Routes>
      <Route path="/" element={<SimpleOmeletteRecipe />} />
   </Routes>
    </Router>

   </>
  );
}

export default App;
