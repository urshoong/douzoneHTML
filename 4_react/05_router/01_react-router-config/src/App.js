import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './pages/Main'
import About from './pages/About'
import Menu from './pages/Menu'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={ <Main/> }/>*/}
          {/*루트가 최상위 볼더이기때문에 그냥 index로 지정하여 사용*/}
          <Route index element={ <Main/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/menu" element={ <Menu/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
