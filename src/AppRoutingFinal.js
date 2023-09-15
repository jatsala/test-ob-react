import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoardPage';


function AppRoutingFinal() {
  // TODO: Change to value from sessionStorage (or something dinamic)
  let loggedIn = true;

  return (
    <Router>
      <div>
        <aside>

        </aside>
        <main>
          <Routes>
            {/* Redirections to protect our routes */}
            <Route path='' element={
              loggedIn ?
                (<Navigate to={'/dashboard'} />)
                :
                (<Navigate to={'/login'} />)
            } />
            {/* Login Route */}
            <Route path='/login' element={<LoginPage />} />
            {/* DashBoard Route */}
            <Route path='/dashboard' element={
              loggedIn ?
                (<DashBoardPage />)
                :
                <Navigate to={'/login'} />
            } />
            <Route element={NotFoundPage} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingFinal;
