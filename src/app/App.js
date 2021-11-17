
import { Routes, Route, useLocation } from "react-router-dom";
import RequireAuth from './Authorization/RequireAuth';

import Loading from './components/Loading';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Game from './components/Game';

function App() {

  return (

    <Routes>
      <Route path={'/'} element={<Loading />} exact/>
      <Route path={'/login'} element={<Login />} exact/>
      <Route element={<RequireAuth />}>
            <Route path="/game" element={<Game />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
  }

export default App;