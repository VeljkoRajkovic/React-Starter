import { useParams } from 'react-router-dom';
import { getUser } from '../../api/users';
import { useQuery } from '@tanstack/react-query';
export const User = () => {
  const { id } = useParams();
  const { data: user, status } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id)
  });
  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <>Error fetching data</>;
  }
  return (
    <>
      <h1>{user?.name}</h1>
    </>
  );
};
