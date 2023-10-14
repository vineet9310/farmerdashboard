import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing the necessary components

import Overview from './pages/Overview';
import LandDetails from './pages/Reports';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/Land Details" element={<LandDetails />}>
        </Route>
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App; 
