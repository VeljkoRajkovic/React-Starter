import { NavLink } from 'react-router-dom';
import './NotFound.css';

export const NotFound = () => {
  return (
    <section className="page_404">
      <div className="four_zero_four_bg">
        <h1>404</h1>
      </div>
      <div className="content_box_404">
        <h3 className="h2">Look like you are lost</h3>
        <p>the page you are looking for not avaible!</p>
        <NavLink className="link_404" to={'/'}>
          Go to Home
        </NavLink>
      </div>
    </section>
  );
};
