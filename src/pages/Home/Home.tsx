import './Home.css';
import { getTodos } from '../../api/users';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { data: users, status } = useQuery({
    queryKey: ['posts'],
    queryFn: getTodos
  });
  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <>Error fetching data</>;
  }

  return (
    <>
      {users.map((user: any) => (
        <Link to={`/user/${user.id}`} key={user.id}>
          {user.name}
        </Link>
      ))}
    </>
    // <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
    //   <div className="w3-display-topleft w3-padding-large w3-xlarge">Logo</div>
    //   <div className="w3-display-middle">
    //     <h1 className="w3-jumbo w3-animate-top">COMING SOON</h1>
    //     <p className="w3-large w3-center">35 days left</p>
    //   </div>
    //   <div className="w3-display-bottomleft w3-padding-large">
    //     Powered by{' '}
    //     <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noreferrer">
    //       w3.css
    //     </a>
    //   </div>
    // </div>
  );
};
