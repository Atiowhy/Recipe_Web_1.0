import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';

import Landing from '../pages/LandingPage';
import Add from '../pages/AddRecipe';
import UpdateRecipe from '../pages/UpdateRecipe';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Search from '../pages/Search';
import AuthCheck from '../Components/Auth/AuthCheck';
import DetailMenu from '../pages/DetailMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/search"
          element={
            <AuthCheck>
              <Search />
            </AuthCheck>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <AuthCheck>
              <DetailMenu />
            </AuthCheck>
          }
        />

        <Route
          path="/add"
          element={
            <AuthCheck>
              <Add />
            </AuthCheck>
          }
        />
        <Route
          path="/update-menu/:menuId"
          element={
            <AuthCheck>
              <UpdateRecipe />
            </AuthCheck>
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
