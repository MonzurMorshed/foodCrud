import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateItem from './pages/CreateItem';
import AllFood from './pages/AllFood';
import UpdateItem from './pages/UpdateItem';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateItem/>}></Route>
          <Route path="/allItem" element={<AllFood/>}></Route>
          <Route path="/updateItem/:id" element={<UpdateItem/>}></Route>
        </Routes>    
      </BrowserRouter>
    </div>
  )
}