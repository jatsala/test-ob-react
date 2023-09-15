import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/taskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';
import TaskListPage from './pages/tasks/TaskListPage';

function AppRoutingOne() {

  let logged = false;

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged', logged)

  }, []);

  const [taskList, setTaskList] = useState([
    {
      id: 1,
      name: 'Task 1',
      description: 'My first Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]);

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/tasks'>| Tasks |</Link>
          <Link to='/taskList'> Task List</Link>
          <Link to='/any404'>| Not Existing Route |</Link>
          <Link to='/login'>| Login ||</Link>

        </aside>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/online-state' element={<StatePage />} />
            <Route path='/login' element={
              logged ?
                <Navigate to={'/dashboard'} />
                :
                <Navigate to={'/login'} />
            }

            />
            <Route path='about' element={<AboutPage />} />
            <Route path='faqs' element={<AboutPage />} />
            <Route path='profile' element=
              {
                logged ? <ProfilePage />
                  :
                  <Navigate to={'/login'} />
              } />

            <Route path='tasks' element={<TasksPage />} />
            <Route path='taskList' element={<TaskListPage tasks={taskList} />} />
            <Route path='/taskList/:id' element={<TaskDetailPage tasks={taskList} />} />

            {/* 404 - Page No Found */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>



      {/* <Route Component={NotFoundPage} /> */}
    </Router>
  );
}

export default AppRoutingOne;
