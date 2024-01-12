import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/index.jsx";
import { NotFound } from "./pages/NotFound/index.jsx";
import { Login } from "./pages/login/login";
import { Registration } from "./pages/registration/index.jsx";
import { Category } from "./pages/Category/CategoryPage.jsx"
import { Favorites } from "./pages/favorites/index.js";
import { ProtectedRoute } from "./components/protected-route";



export const AppRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
 
     <Route path="/category/:id" element={<Category />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Main />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};
