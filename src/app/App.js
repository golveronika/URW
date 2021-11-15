
import { Routes, Route } from "react-router-dom";
import RequireAuth from './Authorization/RequireAuth';

import Loading from './components/Loading';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Game from './components/Game';

function App() {

  return (
    <Routes>
      <Route path={'/'} element={<Loading />} />
      <Route path={'/login'} element={<Login />} />
      <Route element={<RequireAuth />}>
            <Route path="/game" element={<Game />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
  }

export default App;