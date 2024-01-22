import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/index.jsx";
import { NotFound } from "./pages/NotFound/index.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import { Category } from "./pages/Category/CategoryPage.jsx"
import { Favorites } from "./pages/favorites/index.js";
import { ProtectedRoute } from "./components/protected-route";



export const AppRoutes = ({ user, handleLogout }) => {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
      <Route path="/category/:id" element={<Category />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route
        path="/"
        element={<Main user={user} handleLogout={handleLogout} />}
      />
    </Route>
    <Route path="*" element={<NotFound />} />
    <Route path="/login" element={<Login user={user} />} />
    <Route path="/register" element={<Register user={user} />} />
  </Routes>
  );
};
