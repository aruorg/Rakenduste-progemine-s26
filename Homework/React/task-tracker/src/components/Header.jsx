import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div>
        <h1>Task Tracker</h1>
        <p>Manage your tasks</p>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Header;
