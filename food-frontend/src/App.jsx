import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateItem from './pages/CreateItem';
import AllFood from './pages/AllFood';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateItem/>}></Route>
        <Route path="/allItem" element={<AllFood/>}></Route>
      </Routes>    
    </BrowserRouter>
  )
}