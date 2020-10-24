import React from 'react';
import '../../App.css';
import {BrowserRouter as Router, Switch, Route, useRouteMatch, Link} from 'react-router-dom';
import Wctablet from '../../components/pages/Wctablet';
import Gstreamer from '../../components/pages/Gstreamer';

const Projects = () => {
  let match = useRouteMatch();
  
  return (
    <>
      <nav className="navbar nav-subbar">
        <ul className={'nav-menu nav-submenu'}>
          <li className='nav-item'>
            <Link to={`${match.url}/wctablet`} className='nav-links' >
              Wctablet
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={`${match.url}/gstreamer`} className='nav-links' >
              Gstreamer
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path={`${match.path}/wctablet`} component={Wctablet} />
        <Route path={`${match.path}/gstreamer`} component={Gstreamer} />
      </Switch>
    </>
  );

}

export default Projects;