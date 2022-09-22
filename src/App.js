import Navbar from './components/navbar/Navbar';
import ShaderLayout from './components/ShaderLayout/ShaderLayout';
import Contact from './components/contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ShaderLayout/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<ShaderLayout/>} />
      </Routes>
		</BrowserRouter>
	);
}

export default App;
