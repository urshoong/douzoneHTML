import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menus from './pages/Menus';
import MenuDetail from './pages/MenuDetail';
import MenuRegist from './pages/MenuRegist';
import MenuModify from './pages/MenuModify';
import Login from './pages/Login';
import Error from './pages/Error';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 최상위 메인 경로로 Layout 호출, 하위경로의 요소들은 Layout의 Outlet에서 렌더링된다 */}
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Main/> }/>
          <Route path="menu" >
            {/* Route에 들어있는 index는 default child routes 라는 의미
                부모에 여러 개의 자식 route가 있는 경우 부모 경로에서 + '/'인 경우 설정
                index route는 모든 레벨에서 사용 가능하다. */}
            <Route index element={ <Menus/> }/>
            {/* /menu/:id */}
            <Route path=":id" element={ <MenuDetail/> }/>
            {/* /menu/regist/ */}
            <Route path="regist" element={ <MenuRegist/> }/>
            <Route path="modify" >
              {/* /menu/modify/:id */}
              <Route path=":id" element={ <MenuModify/> }/>
            </Route>
          </Route>
          <Route path="login" element={ <Login/> }/>
        </Route>
        {/* 지정된 경로 이외의 페이지로 접근했을 경우 Error처리하기 위한 페이지 */}
        <Route path="*" element={ <Error/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
