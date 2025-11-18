import Gate from "./Gate";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Profile from "./Profile";
import Login from "./Login";
import { useState } from "react";
function App() {
  const [session, setSession] = useState(undefined);
  function Private() {
    if (session === undefined) return "Загрузка...";
    if (session === null) return <Navigate to="/login" replace />;
    return <Outlet />;
  }
  return (
    <BrowserRouter>
      {/* 1. мы получили информацию по сессии */}
      <Gate onSession={setSession} />
      <nav>
        <Link to="/">Домашняя</Link>
        <Link to="/users">Пользователи</Link>
        <Link to="/profile">Профиль</Link>
      </nav>
      <Routes>
        {/* Госетевой вход */}
        <Route path="/login" element={<Login session={session} />} />
        {/* Защищенные страницы */}
        <Route element={<Private />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route
            path="/profile"
            element={<Profile session={session} />}
          ></Route>
        </Route>
        {/* Любой другой path */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
//потом вернуть
{
  /* <Gate /> */
}
export default App;
// 1. css форма входа (красивая, стиллизованная)
// 2. вводим данные для регистрации и приходит красивое письмо на почту
// 3. красивый, стиллизованный профиль
// 4. режим редактирования профиля

//1 При старте GATE определяет есть ли сессия
//2 APP получает сессию и решает что показать
//3 Если сессия null перенаправляем в Login для входа/регистрации
//4 Если есть сессия показываем Home, Users, Profile
//5 Когда выходим редирект в Login
