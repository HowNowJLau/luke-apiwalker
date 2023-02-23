import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Wrapper from './views/Wrapper';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace/>}/>
        <Route index path='/home' element={<Wrapper/>}/>
        <Route path="/home/:type/:id" element={<Wrapper/>}/>
      </Routes>
    </div>
  );
}

export default App;
