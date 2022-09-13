import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import './App.css'

function App() {
  return (
    <Routers>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/menu'>
          <Route index element={<Menu/>}/>
          <Route path=':id' element={<MenuDetail/>}/>
          <Route path='/regist' element={<MenuRegist/>}/>
          <Route path='/modify' element={<MenuModify/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Routers>
  );
}

export default App;
