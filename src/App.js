import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './loginpage';
import HomePage from './homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;