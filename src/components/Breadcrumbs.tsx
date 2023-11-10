import { useLocation, Link } from 'react-router-dom';
import './Breadcrumbs.css';
type Location = {
  pathname: string;
  search: string;
  hash: string;
  state: unknown;
  key: string;
};
export const Breadcrumbs = () => {
  const location: Location = useLocation();

  let currentLink: string = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
};
