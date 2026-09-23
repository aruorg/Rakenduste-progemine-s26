import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='site-header'>
      <div className='header-content'>
        <h1>Task Tracker</h1>
        <p>Manage your tasks</p>

        <nav className='main-nav'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Header;
