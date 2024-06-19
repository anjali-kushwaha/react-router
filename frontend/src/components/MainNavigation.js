import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* <Link to="/" >Home</Link> */}
            {/* end :- home link is always active so when we write end it treated as when its active */}
            <NavLink to="/" className={({isActive})=> isActive? classes.active : undefined } end>Home</NavLink>
          </li>
          <li>
          <NavLink to="/events" className={({isActive})=> isActive? classes.active : undefined } end>Events</NavLink>
          {/* <Link to="/events">Events</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
